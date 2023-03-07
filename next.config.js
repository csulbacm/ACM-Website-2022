/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            unoptimized: true,
        },
    },
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId },
    ) {
        return {
            '/': { page: '/' },
            '/links': { page: '/links' },
            '/hacktoberfest': { page: '/hacktoberfest' },
            '/beachhacks': { page: '/beachhacks' },
        };
    },
    trailingSlash: true,
};

module.exports = nextConfig;
