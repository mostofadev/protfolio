// next-seo.config.js
const SEO = {
  titleTemplate: "%s | MostofaDev",
  defaultTitle: "MostofaDev - Web Developer & Designer",
  description: "Professional web development services with Next.js, React, and Laravel.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mostofadev.com",
    site_name: "MostofaDev",
    images: [
      {
        url: "https://mostofadev.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MostofaDev Website Preview",
      },
    ],
  },
  twitter: {
    handle: "@mostofadev",
    site: "@mostofadev",
    cardType: "summary_large_image",
  },
};

export default SEO;
