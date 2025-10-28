import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "hono/bun";
import { existsSync, readdirSync } from "fs";
import { resolve } from "path";

const app = new Hono();

// Request logging middleware
app.use('*', async (c, next) => {
  console.log(`📥 ${c.req.method} ${c.req.url}`);
  await next();
  console.log(`📤 ${c.req.method} ${c.req.url} → ${c.res.status}`);
});

// CORS configuration
app.use('/*', cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://cozyspace-style-guide.onrender.com']
    : ['http://localhost:5173'],
  credentials: true,
}));

// API routes
app.get("/api/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/hello", (c) => {
  return c.json({
    message: "Hello BHVR!",
    success: true,
    timestamp: new Date().toISOString(),
  });
});

// Health check endpoint for Render
app.get("/api/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    port: process.env.PORT || 3000,
  });
});

// Serve static files from ./public (copied from client/dist)
app.use('/*', serveStatic({
  root: './public',
}));

// Fallback for client-side routing (SPA)
app.get('*', serveStatic({
  path: './public/index.html',
}));

// Start the server ONLY if this file is run directly (not imported)
if (import.meta.main) {
  const port = parseInt(process.env.PORT || '3000', 10);
  const hostname = '0.0.0.0';

  console.log(`🚀 Starting server...`);
  console.log(`   Port: ${port}`);
  console.log(`   Hostname: ${hostname}`);
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Working Directory: ${process.cwd()}`);

  const staticPath = resolve(process.cwd(), './public');
  console.log(`   Static files from: ${staticPath}`);
  console.log(`   Static path exists: ${existsSync(staticPath)}`);

  if (existsSync(staticPath)) {
    console.log(`   Files in static directory:`);
    try {
      const files = readdirSync(staticPath);
      files.forEach(file => console.log(`     - ${file}`));
    } catch (e) {
      console.error(`   Error reading directory: ${e}`);
    }
  } else {
    console.error(`   ❌ Static directory does not exist!`);
  }

  const server = Bun.serve({
    fetch: app.fetch,
    port: port,
    hostname: hostname,
  });

  console.log(`✅ Server is running on http://${hostname}:${port}`);
  console.log(`   Health check: http://0.0.0.0:${port}/api/health`);
}