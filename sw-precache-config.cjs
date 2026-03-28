module.exports = {
  staticFileGlobs: [
    "**.html",
    "templates/**",
    "dist/fonts/**",
    "dist/styles/style.css",
    "dist/styles/materialize.min.css",
    "dist/stylesUncss/material-design-iconic-font.css",
    "dist/scripts/**"
  ],
  staticFileGlobsIgnorePatterns: [
    /dist\/images\//,
  ],
  navigateFallback: "/index.html",
  runtimeCaching: [
    {
      urlPattern: /\/dist\/images\//,
      handler: "cacheFirst"
    }
  ]
};
