import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: '../website',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    subtitle: z.string().optional(),
    hero: z.object({
      heading: z.string(),
      subheading: z.string(),
      cta: z.string(),
      cta_link: z.string(),
    }).optional(),
    hero_cta: z.string().optional(),
  }).passthrough(),
});

export const collections = { pages };
