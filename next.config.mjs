/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the project's reviewed agent instructions unchanged.
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
