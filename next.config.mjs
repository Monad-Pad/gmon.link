/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "api.monadpad.com",
                port: '',
                pathname: "/**",
            },
            {
                protocol: 'https',
                hostname: "avatars.githubusercontent.com",
                port: '',
                pathname: "/**",
            },
            
        ]
    },
};

export default nextConfig;
