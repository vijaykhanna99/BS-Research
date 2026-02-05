/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'iisc.ac.in',
            },
            {
                protocol: 'https',
                hostname: 'www.iisc.ac.in',
            },
            {
                protocol: 'https',
                hostname: 'iitm.ac.in',
            },
            {
                protocol: 'https',
                hostname: 'www.iitm.ac.in',
            },
            {
                protocol: 'https',
                hostname: 'iiscprofiles.irins.org',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
        ],
    },

    poweredByHeader: false,

    async headers() {
        // Content Security Policy
        const cspHeader = `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com;
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com;
            img-src 'self' blob: data: https:;
            font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com data:;
            frame-src 'self' https://www.youtube.com;
            connect-src 'self' https://www.google-analytics.com;
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            frame-ancestors 'none';
            block-all-mixed-content;
            upgrade-insecure-requests;
        `.replace(/\s{2,}/g, ' ').trim()

        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: cspHeader
                    },
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
