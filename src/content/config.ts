import { defineCollection, z } from 'astro:content';

const puertosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    puerto: z.string().optional(),
    pais: z.string().optional(),
  }),
});

export const collections = {
  'puertos': puertosCollection,
};
