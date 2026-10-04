import { SITE_URL } from '../lib/site';
import { areas } from '../data/areas';
import { services } from '../data/services';
const base = ['/', '/services', '/our-process', '/service-areas', '/faq', '/contact', '/privacy', '/terms'];
const paths = [...base, ...services.map((s) => s.path), ...areas.map((a) => `/service-areas/${a.slug}`)];
export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${SITE_URL}${p === '/' ? '/' : p + '/'}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
