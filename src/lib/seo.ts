import { SITE_URL, business } from './site';
import { areas } from '../data/areas';

export function businessSchema() {
  return {
    '@type': ['Plumber', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: business.name,
    description: business.description,
    url: SITE_URL,
    telephone: business.phoneE164,
    address: { '@type': 'PostalAddress', addressLocality: business.city, addressRegion: business.region, addressCountry: business.country },
    areaServed: [{ '@type': 'City', name: 'Norton, Ohio' }, ...areas.map((a) => ({ '@type': 'Place', name: `${a.name}, Norton, Ohio` }))],
    knowsAbout: ['Hydro jetting', 'Residential drain cleaning', 'Commercial drain cleaning', 'Sewer camera inspection'],
  };
}

export function pageSchema(path: string, pageName: string, description: string, crumbs: { name: string; path: string }[]) {
  const pageUrl = `${SITE_URL}${path === '/' ? '' : path}`;
  const graph: any[] = [
    businessSchema(),
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageName,
      description,
      isPartOf: { '@type': 'WebSite', name: business.name, url: SITE_URL },
      about: { '@id': `${SITE_URL}/#business` },
    },
  ];
  if (crumbs.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
        '@type': 'ListItem', position: i + 1, name: c.name, item: `${SITE_URL}${c.path === '/' ? '/' : c.path}`,
      })),
    });
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function faqSchema(faqs: { title?: string; question?: string; text?: string; answer?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question ?? f.title, acceptedAnswer: { '@type': 'Answer', text: f.answer ?? f.text } })),
  };
}
