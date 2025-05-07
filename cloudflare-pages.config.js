// Cloudflare Pages configuration
export default {
  build: {
    command: "cd client && npm install && npm run build",
    baseDirectory: "client",
    outputDirectory: "dist/public"
  },
  routes: [
    {
      pattern: "/*",
      destination: "/index.html"
    }
  ],
  headers: {
    "/*": {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
    }
  },
  // This function handles all incoming requests to the deployed application
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Return a custom 404 page if a file is not found
    try {
      // Attempt to serve the requested file
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If the file is not found, we'll return the index.html
      // This enables client-side routing to work properly
      if (url.pathname.startsWith('/api/')) {
        // Return a 404 for API routes that don't exist
        return new Response('Not Found', { status: 404 });
      } else {
        // For all other routes, serve the index.html to allow the SPA router to handle it
        return env.ASSETS.fetch(`${url.origin}/index.html`);
      }
    }
  }
};