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
            '/': { page: '/', __nextDefaultLocale: 'en' },
            '/links': { page: '/links' },
            '/hacktoberfest': { page: '/hacktoberfest' },
        };
    },
    trailingSlash: true,
};

module.exports = nextConfig;
