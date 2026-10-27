import { MetadataRoute } from 'next';
import { getShowcaseProjects } from '@/data/projects';
import { SITE } from '@/lib/site';

type ChangeFrequency =
  | 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getShowcaseProjects();
  const cf: ChangeFrequency = 'monthly';

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: cf,
      priority: 1,
    },
    {
      url: `${SITE.url}/#projects`,
      lastModified: new Date(),
      changeFrequency: cf,
      priority: 0.8,
    },
    ...projects.map((project) => ({
      url: `${SITE.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: cf,
      priority: 0.7,
    })),
  ];
}
