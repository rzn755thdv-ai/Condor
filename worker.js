export default {
  async fetch(request) {
    const url = new URL(request.url);
    // Normalize path (lowercase and remove trailing slashes)
    const pathname = url.pathname.replace(/\/+$|^$/, "") || "/";
    const normalized = pathname.toLowerCase();

    // Condor digital business card short link
    if (normalized === "/ccg0907") {
      // Serve the noindex digital card page
      return fetch(new URL("/digital-card.html", url));
    }

    // Allow /digital-card shorthand
    if (normalized === "/digital-card") {
      return fetch(new URL("/digital-card.html", url));
    }

    // Default: serve the site normally
    return fetch(request);
  },
};
