const PROXY_CONFIG = [
  {
    context: ["/api"],
    target: "https://drh-tre-garbo-4b949.web.app/",
    secure: true,
    logLevel: "debug",
    pathRewrite: { "^/api": "" },
  },
];

module.exports = PROXY_CONFIG;
