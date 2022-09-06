/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ['en-US', 'fr', 'de'],
    defaultLocale: 'en-US',
  },
  test: /\.(sass|css|scss)$/,

  use: ['style-loader', 'css-loader', 'sass-loader'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'utils')],
  },
  images: {
    domains: ['i.pravatar.cc'],
  },
};

module.exports = nextConfig;
