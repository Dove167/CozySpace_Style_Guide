import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "hono/bun";
import type { ApiResponse } from "shared/dist";

export const app = new Hono()

.use('/*', cors({
  origin: process.env.NODE_ENV === 'production'
    ? ['https://cozyspace-style-guide.onrender.com'] 
    : ['http://localhost:5173'],
  credentials: true,
}))

// API routes
.get("/api/", (c) => {
	return c.text("Hello Hono!");
})

.get("/api/hello", async (c) => {
	const data: ApiResponse = {
		message: "Hello BHVR!",
		success: true,
	};

	return c.json(data, { status: 200 });
})

  // Serve static files from client/dist
  .use('/*', serveStatic({
    root: './client/dist',
  }))

  // Fallback to index.html for client-side routing
  .get('*', serveStatic({
    path: './client/dist/index.html',
  }));

const port = process.env.PORT || 3000;

export default {
  port,
  fetch: app.fetch,
};