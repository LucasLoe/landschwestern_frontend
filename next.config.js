/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: "/((?!maintenance).*)",
      //   destination: "/maintenance.js",
      //   permanent: false,
      // },
      {
        source: "/maintenance.js",
        destination: "/",
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig
