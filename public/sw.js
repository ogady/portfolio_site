// Gatsby時代の gatsby-plugin-offline が登録した Service Worker を置き換えて消すためのもの。
// ブラウザが更新を検知するとこれに差し替わり、キャッシュを全削除して登録解除し、開いているページを再読み込みする。
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      clients.forEach((client) => client.navigate(client.url))
    })(),
  )
})
