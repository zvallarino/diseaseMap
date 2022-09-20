/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "www.popcouncil.org",
    ],
  },
  
}

module.exports = nextConfig
