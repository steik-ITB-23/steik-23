import { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="id">
      <Head>
        {/* Basic meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO meta tags */}
        <meta
          name="description"
          content="Jelajahi saluran informasi dan materi pembelajaran untuk mahasiswa STEI-K. Tetap terupdate dengan pengumuman terbaru, konten edukatif, dan sumber daya yang disesuaikan untuk mahasiswa teknik elektro dan ilmu komputer."
        />
        <meta name="keywords" content="STEI-K, Kampus, ITB, 2023, 23, Teknik Informatika, Sistem dan Teknologi Informasi" />
        <meta name="author" content="BPA IT STEI-K 23" />

        {/* Open Graph meta tags (for Facebook) */}
        <meta property="og:title" content="Kampus STEI-K 23" />
        <meta
          property="og:description"
          content="Jelajahi saluran informasi dan materi pembelajaran untuk mahasiswa STEI-K. Tetap terupdate dengan pengumuman terbaru, konten edukatif, dan sumber daya yang disesuaikan untuk mahasiswa teknik elektro dan ilmu komputer."
        />
        <meta property="og:image" content="https://steik23.netlify.app/steik23.svg" />
        <meta property="og:url" content="https://steik23.netlify.app" />
        <meta property="og:type" content="website" />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kampus STEI-K 23" />
        <meta
          name="twitter:description"
          content="Jelajahi saluran informasi dan materi pembelajaran untuk mahasiswa STEI-K. Tetap terupdate dengan pengumuman terbaru, konten edukatif, dan sumber daya yang disesuaikan untuk mahasiswa teknik elektro dan ilmu komputer."
        />
        <meta name="twitter:image" content="https://steik23.netlify.app/steik23.svg" />

        {/* JSON-LD for structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "STEI-K 23 Campus",
            "url": "https://steik23.netlify.app",
            "logo": "https://steik23.netlify.app/steik23.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "088210145442",
              "contactType": "customer service",
              "areaServed": "Jawa Barat"
            }
          }
        `}</script>

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="https://steik23.netlify.app/steik23.svg" />

        {/* Add link to favicon */}
        <link rel="icon" href="https://steik23.netlify.app/steik23.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
