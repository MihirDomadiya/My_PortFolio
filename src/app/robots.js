export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://mihirdomadiya.vercel.app/sitemap.xml',
    };
}