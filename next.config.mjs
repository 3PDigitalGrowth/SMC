/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // Printed QR codes point here so the destination can change
        // (e.g. to a feedback-gate page) without reprinting anything.
        source: '/review',
        destination:
          'https://search.google.com/local/writereview?placeid=ChIJ1cB05tr_uWoRqs7WlmlmC-4',
        permanent: false,
      },
      {
        // Notary pages went live 13 Oct 2026; the review links sent to the firm still work.
        source: '/preview/notary',
        destination: '/notary-public-gawler',
        permanent: true,
      },
      {
        source: '/preview/notary/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['next-mdx-remote', '@mdx-js/mdx'],
  },
}

export default nextConfig
