import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './contents' }),
  schema: z.object({
    title: z.string().transform((s) => s.trim()),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
})

export const collections = { posts }
