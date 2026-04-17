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

    // Preferred QR and shareable link
    if (normalized === "/johnny") {
      const res = await fetch(new URL("/digital-card.html", url));
      return addNoIndexHeader(res);
    }

    // Backwards compatible short links
    if (normalized === "/ccg0907" || normalized === "/digital-card") {
      const res = await fetch(new URL("/digital-card.html", url));
      return addNoIndexHeader(res);
    }

    // Short link for PDF
    if (normalized === "/ss") {
      const res = await fetch(new URL("/files/simplesabotage.pdf", url));
      return addNoIndexHeader(res);
    }

    // Default: serve the site normally
    const res = await fetch(request);
    return shouldNoIndex ? addNoIndexHeader(res) : res;
  },
};
