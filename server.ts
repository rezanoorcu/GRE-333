import express from "express";
import path from "path";
import axios from "axios";
import * as cheerio from "cheerio";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Log all requests for debugging
  app.use((req, res, next) => {
    console.log(`[LEXICON REQUEST] ${req.method} ${req.url}`);
    next();
  });

  // Simple diagnostics
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "operational", 
      environment: process.env.NODE_ENV || "development",
      uptime: process.uptime()
    });
  });

  // Proxy route for Editorial RSS feeds
  app.get("/api/editorials", async (req, res) => {
    console.log(`[LEXICON API] ${new Date().toISOString()} - Fetching Daily Star Editorials`);
    res.setHeader('Content-Type', 'application/json');
    
    try {
      const feeds = [
        "https://www.thedailystar.net/views/editorial/rss.xml",
        "https://www.thedailystar.net/opinion/editorial/rss.xml"
      ];
      
      const feedResults = await Promise.all(
        feeds.map(url => axios.get(url, { 
          timeout: 15000,
          headers: { 
            'Accept': 'application/rss+xml, application/xml, text/xml',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
          }
        }).catch(e => {
          console.error(`[LEXICON API] Failed to fetch feed ${url}:`, e.message);
          return null;
        }))
      );

      const items: any[] = [];
      const seenLinks = new Set();

      feedResults.forEach(response => {
        if (!response || !response.data) return;
        
        try {
          const $ = cheerio.load(response.data, { xmlMode: true });
          $("item").each((i, el) => {
            const title = $(el).find("title").text().trim();
            const link = $(el).find("link").text().trim();
            
            if (title && link && !seenLinks.has(link)) {
              seenLinks.add(link);
              let description = $(el).find("description").text() || $(el).find("content\\:encoded").text();
              description = description.replace(/<[^>]*>?/gm, '').trim().substring(0, 500);
              
              items.push({
                title,
                link,
                pubDate: $(el).find("pubDate").text().trim() || new Date().toISOString(),
                description,
                source: "The Daily Star"
              });
            }
          });
        } catch (parseError) {
          console.error("[LEXICON API] Error parsing feed XML:", parseError);
        }
      });

      console.log(`[LEXICON API] Successfully returning ${items.length} Daily Star items`);
      res.json(items.slice(0, 20));
    } catch (error: any) {
      console.error("[LEXICON API] Critical error fetching editorials:", error.message);
      res.status(500).json({ error: "Failed to fetch editorials", details: error.message });
    }
  });

  // Route to scrape full article content
  app.post("/api/scrape-article", async (req, res) => {
    const { url } = req.body;
    res.setHeader('Content-Type', 'application/json');
    
    if (!url) return res.status(400).json({ error: "URL is required" });

    console.log(`[LEXICON API] Scraping Daily Star: ${url}`);
    try {
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
        },
        timeout: 20000
      });
      const $ = cheerio.load(response.data);
      
      let content = "";
      
      // Daily Star specific selectors for opinion/editorial
      const articleBody = $(".field-name-body .field-item, .article-content, .story-content");
      
      if (articleBody.length > 0) {
        articleBody.find("p").each((i, el) => {
          content += $(el).text().trim() + "\n\n";
        });
      } else {
        // Fallback for different layouts
        $("p").each((i, el) => {
          const text = $(el).text().trim();
          if (text.length > 60 && !text.includes("Copyright") && !text.includes("Follow The Daily Star")) {
            content += text + "\n\n";
          }
        });
      }

      res.json({ content: content.trim() || "Content could not be parsed for this layout." });
    } catch (error: any) {
      console.error("[LEXICON API] Scraping failure:", error.message);
      res.status(500).json({ error: "Linguistic extraction failed", details: error.message });
    }
  });


  // Vite / Production Handler
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => res.sendFile(path.join(distPath, 'index.html')));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[LEXICON SERVER] Active on port ${PORT}`);
  });
}

startServer().catch(err => {
  console.error("CRITICAL: Failed to start server:", err);
  process.exit(1);
});
