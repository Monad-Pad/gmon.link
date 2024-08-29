/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "api.monadpad.com",
                port: '',
                pathname: "/**",
            }
        ]
    },
};

export default nextConfig;
