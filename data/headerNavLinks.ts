import trackersData from './trackersData'

export interface NavChildLink {
  href: string
  title: string
  subtitle?: string
}

export interface NavLink {
  href?: string
  title: string
  children?: NavChildLink[]
}

const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/tags', title: 'Tags' },
  {
    title: 'Trackers',
    children: trackersData.map((t) => ({
      href: t.href,
      title: t.title,
      subtitle: `${t.subtitle} · ${t.entries} 条目 · ${t.edges} 条边`,
    })),
  },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
]

export default headerNavLinks
