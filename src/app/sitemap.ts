import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.nojju.com/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nojju.com/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://www.nojju.com/about',
      lastModified: new Date(),
    },
    {
        url: 'https://www.nojju.com/contact',
        lastModified: new Date(),
      },
      {
        url: 'https://www.nojju.com/terms',
        lastModified: new Date(),
      },
      {
        url: 'https://www.nojju.com/privacy',
        lastModified: new Date(),
      },
      {
        url: 'https://www.nojju.com/disclaimer',
        lastModified: new Date(),
      },
      
  ]
}