/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image domains to allow Pokemon API images
  images: {
    domains: [
      'raw.githubusercontent.com', // Pokemon API sprites
      'github.com',               // GitHub images
      'githubusercontent.com'      // GitHub user content
    ],
    // Alternative: use remotePatterns for more specific control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
      },
    ],
  },
};

module.exports = nextConfig;
