import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://ktubee.vercel.app/',

            changeFrequency: 'monthly',

            priority: 1,
        },
        {
            url: 'https://ktubee.vercel.app/',

            changeFrequency: 'monthly',
            priority: 0.1,
        },
    ];
}
