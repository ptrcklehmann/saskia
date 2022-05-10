
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/ptrck/Desktop/saskia-website/saskia/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/ptrck/Desktop/saskia-website/saskia/src/pages/index.js")),
  "component---src-pages-publications-js": preferDefault(require("/Users/ptrck/Desktop/saskia-website/saskia/src/pages/publications.js")),
  "component---src-templates-publication-post-js": preferDefault(require("/Users/ptrck/Desktop/saskia-website/saskia/src/templates/publication-post.js"))
}

