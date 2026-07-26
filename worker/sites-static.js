const worker = {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || request.method !== "GET") {
      return response;
    }

    const url = new URL(request.url);
    if (url.pathname.endsWith("/")) {
      url.pathname += "index.html";
    } else if (!url.pathname.split("/").at(-1)?.includes(".")) {
      url.pathname += "/index.html";
    } else {
      return response;
    }

    return env.ASSETS.fetch(new Request(url, request));
  },
};

export default worker;
