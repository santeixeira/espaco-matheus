/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: [
      "images.pexels.com",
      "instagram.frec7-1.fna.fbcdn.net",
      "cdn.openart.ai",
      "marketplace.canva.com",
      "www.canva.com",
      "espaco-matheus-api-production.up.railway.app"
    ],
  },
  env: {
    API_URL_DEV: process.env.API_URL_DEV,
  },
};

module.exports = nextConfig;
