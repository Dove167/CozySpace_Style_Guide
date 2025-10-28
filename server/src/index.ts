import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "hono/bun";

const app = new Hono();

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

// Serve static files from client/dist
app.use('/*', serveStatic({
  root: '../dist',
}));

// Fallback for client-side routing (SPA)
app.get('*', serveStatic({
  path: '../dist/index.html',
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
  console.log(`   Static files from: ${process.cwd()}/../client/dist`);

  const server = Bun.serve({
    fetch: app.fetch,
    port: port,
    hostname: hostname,
  });

  console.log(`✅ Server is running on http://${hostname}:${port}`);
  console.log(`   Health check: http://0.0.0.0:${port}/api/health`);
}