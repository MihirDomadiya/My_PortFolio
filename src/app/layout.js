import "../../public/assets/css/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
    title: "Mihir Domadiya | Full Stack Developer",
    description: "Mihir Domadiya is a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building beautiful, functional, blazing-fast web experiences.",
    keywords: "Mihir Domadiya, Full Stack Developer, Web Developer, React Developer, Next.js Developer, JavaScript, TypeScript, Frontend, Backend",
    authors: [{ name: "Mihir Domadiya", url: "https://mihirdomadiya.vercel.app" }],
    creator: "Mihir Domadiya",
    publisher: "Mihir Domadiya",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://mihirdomadiya.vercel.app"),
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: "Mihir Domadiya | Full Stack Developer",
        description: "Building beautiful, functional, blazing-fast web experiences with React, Next.js, and modern web technologies.",
        url: "https://mihirdomadiya.vercel.app",
        siteName: "Mihir Domadiya Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/assets/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mihir Domadiya - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mihir Domadiya | Full Stack Developer",
        description: "Building beautiful, functional, blazing-fast web experiences with React, Next.js, and modern web technologies.",
        creator: "@mihirdomadiya",
        images: ["/assets/images/og-image.jpg"],
    },
    icons: {
        icon: [
            { url: "/assets/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/assets/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/assets/favicons/favicon.ico", sizes: "48x48" },
        ],
        shortcut: ["/assets/favicons/favicon.ico"],
        apple: [
            { url: "/assets/favicons/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
            { url: "/assets/favicons/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
            { url: "/assets/favicons/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
            { url: "/assets/favicons/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
            { url: "/assets/favicons/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
            { url: "/assets/favicons/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
            { url: "/assets/favicons/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
            { url: "/assets/favicons/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
            { url: "/assets/favicons/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
        ],
        other: [
            {
                rel: "apple-touch-icon-precomposed",
                url: "/assets/favicons/apple-icon-precomposed.png",
            },
            {
                rel: "android-chrome",
                url: "/assets/favicons/android-icon-192x192.png",
                sizes: "192x192",
            },
        ],
    },
    manifest: "/assets/favicons/manifest.json",
    appleWebApp: {
        title: "Mihir Domadiya",
        statusBarStyle: "black-translucent",
        capable: true,
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 5,
    },
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    ],
    verification: {
        google: "google-site-verification=YOUR_VERIFICATION_CODE",
        yandex: "yandex-verification=YOUR_VERIFICATION_CODE",
        other: {
            me: ["mihirdomadiya@email.com"],
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Preload critical fonts */}
                <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap" as="style" />
                <link rel="preload" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" as="style" />
                
                {/* Preconnect to external domains */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                
                {/* Load fonts */}
                <link href="https://fonts.googleapis.com/css2?family=Rubik+Iso&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
                
                {/* Load icons with proper loading strategy */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
                
                {/* Load Tailwind with defer */}
                <script src="https://cdn.tailwindcss.com" defer></script>
                
                {/* Additional performance optimizations */}
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
                <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
                
                {/* Structured data for better SEO */}
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Mihir Domadiya",
                            "url": "https://mihirdomadiya.vercel.app",
                            "image": "https://mihirdomadiya.vercel.app/assets/images/mihir.png",
                            "jobTitle": "Full Stack Developer",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Freelance"
                            },
                            "sameAs": [
                                "https://github.com/MihirDomadiya",
                                "https://linkedin.com/in/mihir-domadiya"
                            ],
                            "description": "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies."
                        })
                    }}
                />
                
                {/* Additional structured data for portfolio */}
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "url": "https://mihirdomadiya.vercel.app",
                            "name": "Mihir Domadiya Portfolio",
                            "description": "Full Stack Developer Portfolio showcasing projects and skills",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://mihirdomadiya.vercel.app/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
            </head>
            <body className="antialiased bg-black">
                {children}
            </body>
        </html>
    );
}
