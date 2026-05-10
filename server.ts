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
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9'
        },
        timeout: 10000
      });
      const $ = cheerio.load(response.data);
      const editorials: any[] = [];

      // Refined selectors based on actual Daily Star HTML structure
      $("article, .card, .card-content, .views-row").each((i, el) => {
        // Try multiple selectors for title and link
        const titleEl = $(el).find(".title, h3, h2, .article-title").first();
        const aEl = titleEl.find("a").length ? titleEl.find("a").first() : $(el).find("a").first();
        
        const title = titleEl.text().trim() || aEl.text().trim();
        const link = aEl.attr("href");
        const date = $(el).find(".date, .post-date, .time, .publish-date").text().trim();
        const intro = $(el).find(".intro, .lead, p, .article-intro").first().text().trim();

        if (title && link) {
          // Normalize the link
          const fullLink = link.startsWith("http") ? link : `https://www.thedailystar.net${link}`;
          
          // Only include if it's likely an editorial
          if (fullLink.includes("/editorial/") || fullLink.includes("/opinion/")) {
            if (!editorials.find(e => e.title === title)) {
              editorials.push({
                id: `live-${i}-${Date.now()}`,
                title,
                link: fullLink,
                date: date || new Date().toLocaleDateString(),
                intro: intro.substring(0, 150) + (intro.length > 150 ? '...' : ''),
                source: "The Daily Star Live"
              });
            }
          }
        }
      });

      cachedEditorials = editorials;
      lastFetchTime = now;
      res.json(editorials);
    } catch (error) {
      console.error("Error fetching editorials:", error);
      res.status(500).json({ error: "Failed to fetch editorials" });
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
      res.status(500).json({ error: "Failed to fetch editorial content" });
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
}

startServer();
