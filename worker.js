export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Normalize path (lowercase and remove trailing slashes)
    const normalized = (url.pathname.replace(/\/+$/, "") || "/").toLowerCase();

    // Paths that should not be indexed by search engines
    const shouldNoIndex =
      normalized === "/digital-card.html" ||
      normalized === "/files/simplesabotage.pdf";

    const addNoIndexHeader = (response) => {
      const headers = new Headers(response.headers);
      headers.set("X-Robots-Tag", "noindex, nofollow");
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
      });
    };

    // Condor digital business card short link
    if (normalized === "/ccg0907") {
      const res = await fetch(new URL("/digital-card.html", url));
      return addNoIndexHeader(res);
    }

    // Allow /digital-card shorthand
    if (normalized === "/digital-card") {
      const res = await fetch(new URL("/digital-card.html", url));
      return addNoIndexHeader(res);
    }

    // Default: serve the site normally
    const res = await fetch(request);
    return shouldNoIndex ? addNoIndexHeader(res) : res;
  },
};
