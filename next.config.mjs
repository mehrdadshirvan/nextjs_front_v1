/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // exportPathMap: async function () {
    //     return {
    //         '/': { page: '/' },
    //         '/docs/[...slug]': { generateStaticParams: '/docs/[...slug].js' },
    //         // Add other routes if needed
    //     };
    // },
    // exportPathMap: function () {
    //     return {
    //         '/': { page: '/' },
    //         // Add other routes if needed
    //     };
    // },
    // images: {
    //     loader: 'custom',
    //     loaderFile: './my-loader.ts',
    // },
};
// module.exports = nextConfig
export default nextConfig;
