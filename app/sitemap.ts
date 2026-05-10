import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.veterinariamutualismo.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/servicios/bienestar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios/diagnostico`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios/especialidades`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios/cirugias`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/servicios/otros-servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/nosotros`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/aviso-de-privacidad`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
