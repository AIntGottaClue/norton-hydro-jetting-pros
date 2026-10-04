export type Area = {
  slug: string; name: string; place: string; image: string; imageAlt: string;
  title: string; intro: string; paragraphs: string[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; url: string }[];
  nearby: string[];
};

const SEWER = { label: 'City of Norton water and sewer page', url: 'https://www.cityofnorton.org/169/Water-Sewer' };
const HISTORY = { label: 'City of Norton modern era history', url: 'https://cityofnorton.org/210/Modern-Era' };
const SCPH = { label: 'Summit County Public Health sewage treatment systems', url: 'https://www.scph.org/water-quality/sewage-treatment-systems' };

export const areas: Area[] = [
  {
    slug: 'nash-heights', name: 'Nash Heights', place: 'neighborhood',
    image: '/images/library/split-screen-miracle-21.jpg', imageAlt: 'Clogged pipe on one side and a jetted clean pipe on the other',
    title: 'A neighborhood that moved from septic tanks to sewer lines',
    intro: 'Nash Heights is the Norton neighborhood where failing septic tanks led the city to build a gravity sewer system. For a homeowner there, the first drain question is where the house line meets that sewer.',
    paragraphs: [
      'The City of Norton lists Ohio EPA findings and orders and a public health nuisance resolution among its Nash Heights records, and the engineering firm that designed the project describes it as necessary to abandon failing septic tanks. The result was about 27,000 feet of 8-inch sanitary sewer, a pump station and 3,000 feet of 6-inch force main. The city\'s 2016 resolution names streets including Nash Boulevard, Alberta Drive, Brookside Drive, Wooddale Drive and a stretch of Greenwich Road.',
      'That history shapes the plumbing. A home that was built on a septic tank was later tied into the new sewer, and the connection between the house and the sewer lateral is newer than the house itself. Summit County Public Health notes that when a home connects to sanitary sewer, the old septic system must be properly abandoned, and an abandonment report goes to the health department. A line that backs up near the old tank location is worth checking for how the abandonment and the new connection were done.',
      'The sewer includes a pump station, and the city later contracted engineering work to replace about 1,200 feet of sanitary sewer on Greenwich Road and upgrade a pump station there. When several homes on a street back up together, the cause is more likely in the main or the pump system than in one house. The City of Norton says the main is handled by the sewer authority that serves the address, while the lateral belongs to the owner.',
      'Use this to sort the call. One house with slow drains points to the lateral or the home\'s own lines, where hydro jetting can clean buildup. Several neighbors with the same symptom point to the public side, and the sewer authority listed on the city page is the first call.',
    ],
    faqs: [
      { question: 'Why does Nash Heights have a newer sewer than the rest of the neighborhood\'s homes?', answer: 'The city built a gravity sanitary sewer system there to replace failing septic tanks, so the sewer is newer than many of the houses connected to it.' },
      { question: 'What happens to the old septic tank when a home connects to sewer?', answer: 'Summit County Public Health says the septic system must be properly abandoned, and the contractor who connects the home can perform the abandonment. An abandonment report is then submitted to the health department.' },
      { question: 'My neighbors and I all have slow drains. Who should I call?', answer: 'Several homes with the same symptom point to the sewer main or pump system, which the sewer authority handles. Report it to the contact listed on the City of Norton water and sewer page.' },
      { question: 'Can hydro jetting help a home in Nash Heights?', answer: 'It can clean buildup in the house line and the lateral when the pipe is sound. It does not fix a problem in the public main.' },
    ],
    sources: [
      { label: 'City of Norton Nash Heights sewer installation page', url: 'http://www.cityofnorton.org/173/Nash-Heights-Sewer-Installation' },
      { label: 'Nash Heights area sanitary sewer improvements, project summary', url: 'https://www.envdesigngroup.com/projects/nash-heights-area-sanitary-sewer-improvements/' },
      { label: 'Resolution of necessity for Nash Heights gravity sewers', url: 'https://www.cityofnorton.org/DocumentCenter/View/1370/002-2016-Resolution-of-Necessity---Nash-Heights--Gravity' },
      { label: 'Greenwich Road sanitary sewer replacement ordinance', url: 'https://www.cityofnorton.org/DocumentCenter/View/1547/128-2018-EDG-Contract' },
      SCPH, SEWER,
    ],
    nearby: ['brookside-greens', 'johnson-corners', 'loyal-oak'],
  },
  {
    slug: 'brookside-greens', name: 'Brookside Greens', place: 'neighborhood',
    image: '/images/library/sonic-blast-7.jpg', imageAlt: 'Illustration of a jetting nozzle moving through a clean pipe',
    title: 'New homes on former golf course land',
    intro: 'Brookside Greens is a newer Norton development of single-family homes built on a former country club property. Newer pipe does not mean problem-free, and construction-era issues are worth knowing about.',
    paragraphs: [
      'Brookside Greens was built on a former golf course in Norton. Local news coverage describes a development planned for 308 single-family homes and 180 apartments, with homes built by a national homebuilder and sold as they were completed. The homes are newly built compared with most of Norton, so the drain lines inside them are newer too.',
      'Newer lines are less likely to carry decades of scale, but they have their own issues. Grading changes around a new house can settle soil over a lateral, and a joint that was not fully seated can shift. Construction debris, a stray rag or dried material from the build can end up in a line and cause an early slow drain. These are clog and settling problems, and a camera view shows the cause quickly.',
      'The lateral from each house to the main is still the owner\'s responsibility under the City of Norton\'s water and sewer page. The main in a new subdivision is handled by the sewer authority that serves the address. If a new home has a backup soon after move-in, the owner should also check what the builder\'s warranty says about the sewer connection before paying for repairs.',
      'The ground here was open turf before it was built on, and Summit County soils are mostly moderately well drained with a clay-enriched subsoil, so water can sit near buried pipe after rain. A backup that appears only after heavy rain deserves a note on the log because it may involve storm drainage instead of the sanitary line.',
    ],
    faqs: [
      { question: 'Can a newly built home have a clogged sewer line?', answer: 'Yes. Construction debris, a settled joint or a belly in the lateral can all cause early slow drains, even in new pipe.' },
      { question: 'Should I call the builder or a drain professional first?', answer: 'Check the builder\'s warranty on the sewer connection first, since a defect may be covered. A camera look helps show whether the issue is debris or a defect.' },
      { question: 'Who maintains the sewer in a new subdivision?', answer: 'The City of Norton says main lines are the responsibility of the sewer authority that serves the address, and laterals belong to the property owner.' },
      { question: 'Does hydro jetting suit new pipe?', answer: 'It can clear debris or buildup from sound pipe. If a camera shows a defect such as an offset, cleaning will not correct it.' },
    ],
    sources: [
      { label: 'Beacon Journal report on the Brookside Greens development', url: 'https://www.beaconjournal.com/story/news/2022/08/08/brookside-greens-norton-ohio-from-golf-course-to-housing-development-ryan-homes-addison-properties/7818371001/' },
      SEWER,
      { label: 'Summit County soil report', url: 'https://soillookup.com/county/oh/summit-county-ohio' },
    ],
    nearby: ['nash-heights', 'johnson-corners', 'western-star'],
  },
  {
    slug: 'johnson-corners', name: 'Johnson Corners', place: 'hamlet',
    image: '/images/library/root-macro-action-37.jpg', imageAlt: 'Water jets cutting roots inside a buried sewer pipe',
    title: 'A mill crossroads on the old trail that became Wooster Road',
    intro: 'Johnson Corners began as a mill crossroads and is one of seven hamlets that dotted Norton farm country before the city formed. Lots here have grown by additions over time, and so have the drain lines.',
    paragraphs: [
      'The City of Norton\'s history pages say the first sawmill in the township was built at Johnson Corners in 1823 and the first gristmill followed around 1830. They also note that an old trail ran through the township and turned southwest at Johnson\'s Corners along a route almost identical to modern Wooster Road. A crossroads with mills and a trail became a place where houses, barns and shops gathered.',
      'Settlement that grows one building at a time leaves a mix. Homes at a historic crossroads tend to have been altered more than once, with kitchens, baths and laundry rooms added in different decades. Each addition can tie into the drain line in a different place and with different pipe, which gives a line more joints, more transitions and more places for buildup to catch.',
      'For a homeowner the practical step is to find out what the line is made of and where it leaves the house. A cleanout is the access point for jetting. If the line has a long run to the street or a joint that has shifted, a camera view first shows whether cleaning will be enough or whether a section needs repair.',
      'Johnson\'s Corners Cemetery, listed in the city\'s history records, is a reminder that the area is old by Ohio standards. Roots from long-established trees along the road are common in older areas, and tree roots are among the most frequent causes of repeated backups in lateral lines. The owner is responsible for the lateral, so root cutting there is usually the owner\'s to arrange.',
    ],
    faqs: [
      { question: 'Why can older homes at a crossroads have mixed plumbing?', answer: 'Additions made in different decades often tie into the drain line with different pipe materials and fittings, so a line may have several transitions.' },
      { question: 'What access does hydro jetting need?', answer: 'A cleanout or similar access point on the line. If there is none, a camera or cleaning may need another entry point.' },
      { question: 'Are roots likely in older neighborhoods?', answer: 'Mature trees are common in older areas, and roots seek out joints in buried pipe. Repeated backups in the same spot often point to roots.' },
      { question: 'Who is responsible for the sewer line from the house to the street?', answer: 'The City of Norton says the lateral belongs to the property owner and the main is handled by the sewer authority that serves the address.' },
    ],
    sources: [
      { label: 'City of Norton early pioneers to industrial giants', url: 'http://www.cityofnorton.org/209/Early-Pioneers-to-Industrial-Giants' },
      HISTORY, SEWER,
    ],
    nearby: ['loyal-oak', 'western-star', 'nash-heights'],
  },
  {
    slug: 'loyal-oak', name: 'Loyal Oak', place: 'hamlet',
    image: '/images/library/recurring-clogs-before-after-40.jpg', imageAlt: 'Split view of a clogged pipe and a cleaned pipe',
    title: 'Rural lots where the sewer or septic question comes first',
    intro: 'Loyal Oak is another of Norton\'s seven historic hamlets. On larger lots, the first question about a drain problem is whether the home is on sewer or a septic system.',
    paragraphs: [
      'The City of Norton lists Loyal Oak among the hamlets that stood in the township before the city formed. The area is also where the local Lions Club sold cider, which led to the annual Apple Cider Festival held each September. The detail is a small clue to the area\'s orchard and farm roots.',
      'Rural and large-lot properties are more likely to rely on a septic system, though Norton\'s history shows that septic neighborhoods have been connected to sewer in stages. Summit County Public Health publishes maintenance guidance for septic systems. Its point of sale program requires an inspection by a registered contractor before a home with a septic or private water system is transferred.',
      'That affects what a drain call means. On sewer, the lateral and main split of responsibility described on the city page applies. On septic, a slow drain can be a pipe problem between the house and tank or a tank and drain field problem. Hydro jetting can clean the pipe that leads to the tank. It cannot change how the soil absorbs water in a drain field.',
      'Larger lots also mean longer line runs and more trees near the line, both of which raise the chance of root intrusion and buildup. Clay-heavy soils hold water around buried pipe and a drain field, which is why a wet yard near a septic area deserves a separate look.',
    ],
    faqs: [
      { question: 'How can I tell whether my home is on sewer or septic?', answer: 'Check property records or ask the sewer authority that serves your address. A septic tank lid or a county permit record also answers it.' },
      { question: 'Can hydro jetting fix a failing drain field?', answer: 'No. Jetting cleans pipe. A drain field problem involves soil absorption, which is a treatment question for the health department and a septic professional.' },
      { question: 'Is an inspection required to sell a home on septic?', answer: 'Summit County Public Health requires an inspection by a registered contractor before a home with a septic system is transferred, though the results do not prevent the transfer.' },
      { question: 'What should I tell you when I call about a rural property?', answer: 'Say whether the home is on sewer or septic, which fixtures are slow, and where large trees stand near the line.' },
    ],
    sources: [
      HISTORY,
      { label: 'Norton, Ohio overview', url: 'https://en.wikipedia.org/wiki/Norton,_Ohio' },
      SCPH,
      { label: 'Summit County Public Health point of sale program', url: 'https://www.scph.org/water-quality/point-sale' },
    ],
    nearby: ['johnson-corners', 'western-star', 'brookside-greens'],
  },
  {
    slug: 'western-star', name: 'Western Star', place: 'hamlet',
    image: '/images/library/split-screen-miracle-20.jpg', imageAlt: 'Corroded old pipe next to a cleaned pipe',
    title: 'A farm hamlet with older homes and long drain runs',
    intro: 'Western Star was a farm hamlet in the township with a tannery by about 1830 and a farm family whose sons became famous inventors. Homes here often carry the plumbing of several eras.',
    paragraphs: [
      'The City of Norton\'s history says the first tannery in the township opened at Western Star around 1830, and that a family of farm-machinery inventors grew up on a farm near the hamlet. Those pages describe quiet rural countryside of farms and farm homes, and a development committee formed in 1958 because residents saw the township growing fast. Norton was a township from 1818, a village from 1961 and a city from 1969.',
      'Older farm homes have usually been renovated several times. Original drain lines may be clay or cast iron, with newer plastic sections spliced in where bathrooms or laundry rooms were added. Mixed materials make for transitions where debris can catch, and old cast iron can carry scale on its walls. A cable alone often leaves that coating in place.',
      'Many farm properties also have outbuildings, floor drains or a separate line from a barn or garage. The City of Norton says roof drains, garage drains and footer drains connect to the storm sewer or ditches, not the sanitary sewer. Keeping those systems separate matters when a drain problem shows up, because a backup tied to rain is a different problem from one tied to the kitchen.',
      'Before any cleaning plan, it helps to know where the line leaves the house, whether a cleanout exists and what the line is made of. A camera view tells you whether a section has shifted or deteriorated. That is worth knowing before using pressurized water on pipe that has been in the ground a long time.',
    ],
    faqs: [
      { question: 'Can hydro jetting damage old cast iron or clay pipe?', answer: 'It depends on the condition of the pipe. Fragile or badly corroded pipe may not be a good candidate, which is why a camera look is useful first.' },
      { question: 'Why do older farm homes have mixed drain materials?', answer: 'Additions and repairs over the years replaced sections of the original line with newer pipe, leaving transitions between materials.' },
      { question: 'Do outbuilding drains connect to the same sewer?', answer: 'Roof, garage and footer drains connect to the storm sewer or ditches according to the City of Norton, not the sanitary sewer.' },
      { question: 'Who handles the line from the house to the street?', answer: 'The City of Norton says the lateral belongs to the property owner and the main is handled by the sewer authority that serves the address.' },
    ],
    sources: [
      { label: 'City of Norton early pioneers to industrial giants', url: 'http://www.cityofnorton.org/209/Early-Pioneers-to-Industrial-Giants' },
      { label: 'City of Norton government history', url: 'https://www.cityofnorton.org/212/Government-History' },
      SEWER,
    ],
    nearby: ['johnson-corners', 'loyal-oak', 'brookside-greens'],
  },
];
export const areaBySlug: Record<string, Area> = Object.fromEntries(areas.map((a) => [a.slug, a]));
