import { MetadataRoute } from 'next'
import { coursesData } from '@/data/courses'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://behrad.tech'
  
  // Get all course slugs
  const courseUrls = Object.keys(coursesData).map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...courseUrls,
  ]
}
