import manifestJSON from '__STATIC_CONTENT_MANIFEST';

export default {
  async fetch(event) {
    const manifest = JSON.parse(manifestJSON);
    let url = new URL(event.request.url);
    let path = url.pathname;

    if (path === "/") path = "/index.html";
    path = path.replace(/^\/+/, ""); // remove leading /

    if (manifest[path]) {
      const file = manifest[path];
      return fetch(file);
    }

    // fallback to index.html for SPA routes
    return fetch(manifest['index.html']);
  },
};
