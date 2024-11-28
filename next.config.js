/** @type {import('next').NextConfig}
const nextConfig = {};

export default nextConfig; **/


/** @type {import('next').NextConfig} 
const nextConfig = {
    reactStrictMode: true, // Enables React's strict mode for development
  //  swcMinify: true, // Enables the Next.js SWC compiler for faster builds
    experimental: {
      // Enable experimental features (if needed)
      //appDir: true, // Enable the `app` directory for Next.js 13+
    },
    webpack: (config, { isServer }) => {
      // Customize webpack configuration (optional)
      if (!isServer) {
        // Fix for external modules (e.g., unsupported browser dependencies)
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };
      }
      return config;
    },
  };
  
  module.exports = nextConfig;*/
  