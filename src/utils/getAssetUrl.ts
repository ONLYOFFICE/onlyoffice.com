export function getAssetUrl(path: string): string {
  if (!path) return path
  const url = path.trim()
  if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:')) return url
  const base = process.env.NEXT_PUBLIC_STATIC_URL || ''
  if (!base) return url
  const hasTrailing = base.endsWith('/')
  const hasLeading = url.startsWith('/')
  if (hasTrailing && hasLeading) return base + url.slice(1)
  if (!hasTrailing && !hasLeading) return base + '/' + url
  return base + url
}
