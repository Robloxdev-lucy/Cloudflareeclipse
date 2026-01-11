export default {
  async fetch(request, env, ctx) {
    return await fetch("https://raw.githubusercontent.com/ItsCrafted/crafted-gamz/main/index.html");
  }
};
