/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "instagram.frec7-1.fna.fbcdn.net",
      "cdn.openart.ai",
      "marketplace.canva.com",
      "www.canva.com",
      "matheuscaneiro.up.railway.app",
      "localhost"
    ],
  },
  env: {
    API_URL_DEV: process.env.API_URL_DEV,
  },
};

module.exports = nextConfig;
