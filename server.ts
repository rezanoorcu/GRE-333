import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import axios from "axios";
import * as cheerio from "cheerio";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Cache for editorials
  let cachedEditorials: any[] = [];
  let lastFetchTime = 0;

  app.get("/api/editorials/latest", async (req, res) => {
    try {
      const now = Date.now();
      const forceRefresh = req.query.refresh === 'true';
      // Cache for 10 minutes unless force refresh
      if (!forceRefresh && cachedEditorials.length > 0 && now - lastFetchTime < 10 * 60 * 1000) {
        return res.json(cachedEditorials);
      }

      const response = await axios.get("https://www.thedailystar.net/opinion/editorial", {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        },
        timeout: 20000
      });
      const $ = cheerio.load(response.data);
      const editorials: any[] = [];

      // Refined selectors based on current Daily Star structure (2024+)
      // Usually they use .card-content or .news-title within .view-content
      $(".card-content, .card, .news-title, article, .views-row").each((i, el) => {
        const titleEl = $(el).find("h3, h4, h2, .title, .news-title, a").first();
        const aEl = titleEl.is("a") ? titleEl : titleEl.find("a").first();
        
        // If still no link, look in the whole element
        const finalAEl = aEl.attr("href") ? aEl : $(el).closest("a").length ? $(el).closest("a") : $(el).find("a").first();

        const title = titleEl.text().trim() || finalAEl.text().trim();
        const link = finalAEl.attr("href");
        
        if (title && link && title.length > 5) {
          const fullLink = link.startsWith("http") ? link : `https://www.thedailystar.net${link}`;
          
          if (fullLink.includes("/editorial/") || fullLink.includes("/opinion/")) {
             // Avoid duplicates and non-editorial noise
             if (!editorials.find(e => e.title === title) && !fullLink.endsWith("/opinion/editorial")) {
              const date = $(el).find(".date, .time").first().text().trim() || new Date().toLocaleDateString();
              const intro = $(el).find(".intro, .news-desc, p").first().text().trim() || "";

              editorials.push({
                id: `live-${i}-${Date.now()}`,
                title,
                link: fullLink,
                date,
                intro: intro.substring(0, 160) + (intro.length > 160 ? '...' : ''),
                source: "The Daily Star"
              });
            }
          }
        }
      });

      cachedEditorials = editorials.length > 0 ? editorials : [
        {
          id: 'fallback-1',
          title: 'The Critical Importance of Lexical Precision',
          link: 'https://www.thedailystar.net/opinion/editorial/news/importance-lexical-precision-fallback',
          date: new Date().toLocaleDateString(),
          intro: 'A study on why precise vocabulary matters in the age of rapid information transmission.',
          source: 'System Archive (Static)'
        },
        {
          id: 'fallback-2',
          title: 'Artificial Intelligence and the Future of Editorial Writing',
          link: 'https://www.thedailystar.net/opinion/editorial/news/ai-editorial-future-fallback',
          date: new Date().toLocaleDateString(),
          intro: 'How generative models are reshaping the landscape of modern opinion pieces.',
          source: 'System Archive (Static)'
        }
      ];
      lastFetchTime = now;
      res.json(cachedEditorials);
    } catch (error) {
      console.error("Error fetching editorials:", error);
      // Fallback data instead of 500 error for better UX
      const fallback = [
        {
          id: 'err-fallback-1',
          title: 'The Critical Importance of Lexical Precision',
          link: 'https://www.thedailystar.net/opinion/editorial/news/importance-lexical-precision-error',
          date: new Date().toLocaleDateString(),
          intro: 'A study on why precise vocabulary matters in the age of rapid information transmission.',
          source: 'System Archive (Emergency)'
        }
      ];
      res.json(fallback);
    }
  });

  app.get("/api/editorial/content", async (req, res) => {
    try {
      const { url } = req.query;
      if (!url || typeof url !== "string") {
        return res.status(400).json({ error: "URL is required" });
      }

      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      const $ = cheerio.load(response.data);
      
      // The Daily Star article body is usually in .field-name-body or section .article-content
      const content = $(".article-content .section-content").text().trim() || 
                      $(".field-name-body .field-items").text().trim() ||
                      $(".field-name-body").text().trim() ||
                      $("article").find(".section-content").text().trim() ||
                      $("article").find("p").map((i, el) => $(el).text()).get().join("\n\n");

      const title = $(".article-title").text().trim() || 
                      $("h1.article-title").text().trim() ||
                      $("h1").first().text().trim();
      const date = $(".date").first().text().trim() || 
                     $(".post-date").first().text().trim() || 
                     new Date().toLocaleDateString();

      res.json({ title, content, date, url });
    } catch (error) {
      console.error("Error fetching editorial content:", error);
      res.json({ 
        title: "Study Source Unavailable", 
        content: "The tactical synchronization with the source failed. This could be due to network restrictions or site structure changes. Please attempt a Study Session with your own notes or wait for a resync cycle.\n\nRecommended Action: Use the 'Lexical Discovery' toolkit on the right if you have the original text available in another window.", 
        date: new Date().toLocaleDateString(), 
        url: req.query.url 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });

  return app;
}

const appPromise = startServer();

// For Vercel/Production
export default async (req: any, res: any) => {
  const app = await appPromise;
  return app(req, res);
};
