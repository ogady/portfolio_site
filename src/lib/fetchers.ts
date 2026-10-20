import { user } from '../data/profile'

// 外部APIはビルド時に取得する。失敗してもビルドは落とさず空配列を返す。
async function getJson<T>(url: string, headers: Record<string, string> = {}): Promise<T | null> {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'portfolio-site', ...headers } })
    if (!res.ok) throw new Error(`${res.status}`)
    return (await res.json()) as T
  } catch (e) {
    console.warn(`[fetch] ${url} failed: ${e}`)
    return null
  }
}

export type Repo = { name: string; description: string | null; url: string; language: string | null; stars: number }

export async function getRepos(): Promise<Repo[]> {
  const token = process.env.READ_GITHUB_API_TOKEN
  const data = await getJson<{ items: any[] }>(
    `https://api.github.com/search/repositories?q=topic:${user.githubTopic}+user:${user.github}&per_page=10`,
    token ? { Authorization: `Bearer ${token}` } : {},
  )
  return (data?.items ?? []).map((r) => ({
    name: r.name,
    description: r.description,
    url: r.html_url,
    language: r.language,
    stars: r.stargazers_count,
  }))
}

export type QiitaItem = { title: string; url: string; date: string }

export async function getQiita(limit = 6): Promise<QiitaItem[]> {
  const token = process.env.QIITA_API_TOKEN
  const data = await getJson<any[]>(
    `https://qiita.com/api/v2/users/${user.qiita}/items?per_page=${limit}`,
    token ? { Authorization: `Bearer ${token}` } : {},
  )
  return (data ?? []).map((i) => ({ title: i.title, url: i.url, date: i.created_at.slice(0, 10) }))
}

export type Slide = { title: string; url: string; date: string }

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")

export async function getSlides(limit = 6): Promise<Slide[]> {
  try {
    const res = await fetch(`https://speakerdeck.com/${user.speakerDeck}.atom`)
    if (!res.ok) throw new Error(`${res.status}`)
    const xml = await res.text()
    return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .slice(0, limit)
      .map(([, e]) => ({
        title: decode(e.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? ''),
        url: e.match(/<link rel="alternate"[^>]*href="([^"]+)"/)?.[1] ?? '',
        date: (e.match(/<published>([^<]+)</)?.[1] ?? '').slice(0, 10),
      }))
      .filter((s) => s.title && s.url)
  } catch (e) {
    console.warn(`[fetch] speakerdeck failed: ${e}`)
    return []
  }
}

export type BlogItem = { title: string; url: string; date: string }

// Medium の個人フィード。最新記事をビルド時に反映する（失敗時は空配列）。
export async function getMedium(): Promise<BlogItem[]> {
  try {
    const res = await fetch(`https://medium.com/feed/@${user.handle}`, { headers: { 'User-Agent': 'Mozilla/5.0' } })
    if (!res.ok) throw new Error(`${res.status}`)
    const xml = await res.text()
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
      .map(([, i]) => ({
        title: decode(i.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1] ?? ''),
        url: (i.match(/<link>([^<]+)<\/link>/)?.[1] ?? '').split('?')[0],
        date: new Date(i.match(/<pubDate>([^<]+)</)?.[1] ?? '').toISOString().slice(0, 10),
      }))
      .filter((p) => p.title && p.url)
  } catch (e) {
    console.warn(`[fetch] medium failed: ${e}`)
    return []
  }
}
