const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  pageExtensions: ["page.jsx"],
  distDir: 'build',
  // compress: true,//压缩
});
