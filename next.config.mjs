/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local drives that write `._*` sidecar files break Next's image cache,
    // so only use the optimizer on Vercel. Images in /public are pre-compressed.
    unoptimized: !process.env.VERCEL,
  },
};

export default nextConfig;
