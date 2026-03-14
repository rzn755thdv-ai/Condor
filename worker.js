export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Condor digital business card short link
    if (url.pathname.toLowerCase() === "/ccg0907") {
      // Serve the noindex digital card page
      return fetch(new URL("/digital-card.html", url));
    }

    // Default: serve the site normally
    return fetch(request);
  },
};
