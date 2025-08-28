/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "creatio2demo.wordpress.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "backoffice.orio.digital",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
