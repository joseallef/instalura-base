// eslint-disable-next-line no-undef
const redirects = require('./config/redirects');
// eslint-disable-next-line no-undef
module.exports = {
  trailingSlash: true,
  images: {
    domains: ['www.datocms-assets.com', 'cdn.pixabay.com', '2.bp.blogspot.com'],
  },
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
