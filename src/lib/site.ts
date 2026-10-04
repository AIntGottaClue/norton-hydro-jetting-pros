import { siteConfig } from '../data/siteConfig';
import { areas } from '../data/areas';
import { serviceList, guideList } from '../data/services';

export const SITE_URL = siteConfig.origin;

export const business = {
  name: siteConfig.brand,
  description: 'Hydro jetting for residential and commercial drain lines in Norton, Ohio.',
  phoneDisplay: siteConfig.phoneDisplay,
  phoneHref: `tel:${siteConfig.phoneHref}`,
  phoneE164: siteConfig.phoneHref,
  city: 'Norton',
  region: 'OH',
  regionName: 'Ohio',
  country: 'US',
} as const;

export const areaLinks = areas.map((a) => ({ href: `/service-areas/${a.slug}`, label: a.name }));
export const serviceLinks = serviceList.map((s) => ({ href: s.path, label: s.name }));
export const guideLinks = guideList.map((g) => ({ href: g.path, label: g.name }));

export type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };
export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/hydro-jetting', label: 'Hydro Jetting', children: guideLinks },
  { href: '/services', label: 'Services', children: serviceLinks },
  { href: '/our-process', label: 'Our Process' },
  { href: '/service-areas', label: 'Service Areas', children: areaLinks },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const footerServiceLinks = [...serviceLinks, ...guideLinks];
