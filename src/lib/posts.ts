import { getCollection } from 'astro:content'

export async function getPosts() {
  const posts = await getCollection('posts')
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}

export const fmtDate = (d: Date) => d.toISOString().slice(0, 10)
