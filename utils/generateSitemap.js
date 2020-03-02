const { generateSitemap } = require("./sitemapGenerator");
const fs = require("fs");

const outdir = "./out/static/";
fs.mkdir(outdir, { recursive: true }, err => {
  if (err) throw err;
});

generateSitemap(process.env.PUBLIC_DOMAIN, outdir);
