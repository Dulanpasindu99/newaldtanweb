module.exports = {
  server: {
    baseDir: ".",
    // Serve index.html for directory paths (e.g. /blog/ → blog/index.html)
    directory: false
  },
  port: 3000,
  // Watch these files and auto-reload the browser on change
  files: [
    "*.html",
    "**/*.html",
    "assets/css/**/*.css",
    "assets/js/**/*.js"
  ],
  // Don't show the browser-sync notification banner on the page
  notify: false,
  // Open the browser automatically on start
  open: true,
  // Log level: "info" shows what files are being watched
  logLevel: "info",
  // Rewrite rules so /blog → blog/index.html, /contact → contact.html, etc.
  serveStatic: ["."],
  // Middleware to handle clean URLs (removes the need for .html extension)
  rewriteRules: [],
  // Ghostmode: sync scrolls and clicks across all open browser tabs
  ghostMode: false
};
