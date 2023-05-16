/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'irs-github-images.s3.amazonaws.com',
            'irs-project-images.s3.amazonaws.com'
        ],
    }
}

module.exports = nextConfig
