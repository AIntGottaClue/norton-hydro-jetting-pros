export type Faq = { question: string; answer: string };
export type Source = { label: string; url: string };
export type ServicePage = {
  slug: string; kind: 'service' | 'guide'; path: string; name: string; image: string; imageAlt: string;
  title: string; description: string; headline: string; intro: string;
  sections: { title: string; paragraphs: string[] }[];
  points: { title: string; text: string }[];
  faqs: Faq[]; sources: Source[]; summary: string;
};

const SEWER_PAGE = { label: 'City of Norton water and sewer page', url: 'https://www.cityofnorton.org/169/Water-Sewer' };

export const services: ServicePage[] = [
  {
    slug: 'severe-grease-and-sludge', kind: 'service', path: '/services/severe-grease-and-sludge', name: 'Severe Grease and Sludge',
    image: '/images/library/grease-sludge-cross-section-31.jpg', imageAlt: 'Water jets cutting through grease and sludge inside a drain pipe',
    title: 'Severe Grease and Sludge Cleaning in Norton, OH | Norton Hydro Jetting Pros',
    description: 'Hydro jetting for grease, soap film and sludge buildup in Norton, Ohio drain lines, and how to tell whether the problem sits on your side of the sewer connection.',
    headline: 'Severe grease and sludge in Norton drain lines',
    intro: 'Kitchen and laundry lines in Norton homes carry fat, soap film and fine solids that settle on the pipe wall and narrow the passage a little more each month. Before any cleaning plan, it helps to know whether the buildup sits in the house line or farther out toward the sewer main.',
    summary: 'Hydro jetting for fat, soap film and sludge that has coated the inside of a drain line.',
    sections: [
      { title: 'What builds up inside the line', paragraphs: [
        'Grease leaves the kitchen as a warm liquid and turns waxy once it meets the cooler pipe wall. Soap scum, hair and food solids stick to that layer, and the passage keeps shrinking from the outside in. A plunger or short cable can punch a hole through the middle without removing the ring around it, which is why a drain that seems fixed often slows down again within weeks.',
        'Hydro jetting sends pressurized water from a nozzle that sits inside the pipe. The water works on the whole wall instead of a single channel through the center. It suits grease and sludge in lines that are structurally sound. It is a cleaning method, not a repair, and it cannot close a crack or straighten an offset joint.' ] },
      { title: 'Where Norton homes differ', paragraphs: [
        'Norton grew from farm country into a city of about 11,700 people, so drain runs vary a lot from one street to the next. Longer runs in older homes give grease more pipe to cling to, while newer subdivisions tend to have shorter, straighter lines. The pipe material and any additions matter more than the age of the house alone.',
        'The City of Norton explains that the lateral line from a home belongs to the property owner, while the main line is handled by the sewer authority that serves the address. A grease blockage between the house and the main is therefore the owner\'s to address. A backup that hits several neighbors at once points toward the main and should be reported to the sewer authority.' ] },
    ],
    points: [
      { title: 'Signs that point to buildup', text: 'Slow kitchen sinks, gurgling after the dishwasher runs, and odors that return a few weeks after a clearing all suggest a coated wall rather than a single clog.' },
      { title: 'What to tell us', text: 'Describe which fixtures are slow, whether the problem follows laundry or dishwashing, and whether the home is on city sewer or a septic system.' },
      { title: 'What jetting will not do', text: 'It will not repair broken pipe, and it cannot change how a septic drain field absorbs water. Those are separate problems with separate fixes.' },
    ],
    faqs: [
      { question: 'Why does my kitchen drain keep slowing down after it is cleared?', answer: 'A cable or plunger often opens a channel through the buildup and leaves the coating on the pipe wall. New grease and soap then stick to what remains, so the passage narrows again. Cleaning the full wall addresses the coating itself.' },
      { question: 'Is a grease problem on my side of the sewer connection or the city side?', answer: 'The City of Norton says the lateral from the home to the main is the property owner\'s responsibility, and the main is the sewer authority\'s. If only your home is affected, the lateral is the likely place to look.' },
      { question: 'Can hydro jetting clear grease from a septic system line?', answer: 'It can clean the pipe that leads to the tank. It cannot treat the tank or the drain field, so a septic problem needs a separate assessment.' },
    ],
    sources: [SEWER_PAGE],
  },
  {
    slug: 'tree-root-intrusions', kind: 'service', path: '/services/tree-root-intrusions', name: 'Tree Root Intrusions',
    image: '/images/library/root-cutting-cross-section-35.jpg', imageAlt: 'Water jet cutting tree roots inside a buried drain pipe',
    title: 'Tree Root Intrusions in Norton, OH Sewer Lines | Norton Hydro Jetting Pros',
    description: 'How tree roots enter Norton, Ohio sewer laterals, what hydro jetting can and cannot do about them, and why clay soils and older joints matter.',
    headline: 'Tree roots in Norton sewer lines',
    intro: 'Many Norton lots were carved out of farmland and still hold mature trees close to the house. Roots look for moisture, and a buried sewer lateral with a loose joint gives them a steady supply. When a line backs up in dry weather, roots are a common suspect worth checking.',
    summary: 'Hydro jetting to cut and flush roots that have grown into a lateral through joints or cracks.',
    sections: [
      { title: 'How roots get into a lateral', paragraphs: [
        'Roots do not break into a sound, tight pipe. They follow moisture to a joint that has shifted, a hairline crack or a poorly sealed connection, then thicken into a mat that catches paper and grease. The first sign is usually a slow drain that clears for a while and returns, often in the growing season.',
        'Hydro jetting can cut roots back to the pipe wall and flush the pieces downstream, which restores the opening. It does not stop the roots from coming back, and it does not seal the joint they came through. A camera view of the line helps show whether the pipe is cracked, offset or simply open at a joint.' ] },
      { title: 'Soil and lot conditions in Norton', paragraphs: [
        'Summit County soils are dominated by moderately well drained soils with a clay-enriched subsoil, according to the county soil report listed below. Clay holds water near buried pipe after rain, which keeps the ground around a lateral damp and attractive to roots. Wet clay also shifts with the seasons, and that movement can open joints over time.',
        'Because the lateral from the house to the main is the property owner\'s responsibility, roots inside that run are normally the owner\'s to address. Roots in the public main are a different matter and belong with the sewer authority that serves the street. If several homes on one street see the same symptom, that distinction is worth raising early.' ] },
    ],
    points: [
      { title: 'Signs that point to roots', text: 'A line that backs up repeatedly in the same place, gurgling toilets, and a problem that gets worse in spring and summer all fit a root intrusion.' },
      { title: 'What helps us understand it', text: 'Tell us where large trees stand relative to the house, whether the backup is in one fixture or several, and whether a camera has been run before.' },
      { title: 'Roots and repairs', text: 'If a camera shows a broken or offset section, cleaning alone will not hold. Ask about repair options before the roots return.' },
    ],
    faqs: [
      { question: 'Will hydro jetting kill the tree?', answer: 'Cutting roots inside a pipe removes the part that grew into the line. It does not remove the root system in the yard, and trees generally keep growing.' },
      { question: 'How do I know the problem is roots and not grease?', answer: 'Roots tend to cause repeated backups at the same point and worsen with the seasons, while grease slows kitchen fixtures first. A camera view of the line is the most direct way to tell.' },
      { question: 'Who is responsible if roots are in the main under the street?', answer: 'The City of Norton says main lines are the responsibility of the sewer authority that serves the address, while laterals belong to the property owner.' },
    ],
    sources: [SEWER_PAGE, { label: 'Summit County soil report', url: 'https://soillookup.com/county/oh/summit-county-ohio' }],
  },
  {
    slug: 'recurring-clogs-and-slow-drains', kind: 'service', path: '/services/recurring-clogs-and-slow-drains', name: 'Recurring Clogs and Slow Drains',
    image: '/images/library/recurring-clogs-clean-sweep-41.jpg', imageAlt: 'Hydro jetting nozzle moving through a clean drain pipe',
    title: 'Recurring Clogs and Slow Drains in Norton, OH | Norton Hydro Jetting Pros',
    description: 'Why drains in Norton, Ohio homes keep clogging, how to separate a fixture problem from a line problem, and when hydro jetting fits.',
    headline: 'Recurring clogs and slow drains in Norton homes',
    intro: 'A drain that clears and then clogs again is telling you the first fix did not reach the cause. In Norton, where homes range from older farmhouse-era lines to recently built streets, the cause can sit in a fixture trap, a branch line or the lateral that carries everything out to the main.',
    summary: 'Hydro jetting for drains that keep slowing down or backing up after being cleared.',
    sections: [
      { title: 'Narrowing down where the problem lives', paragraphs: [
        'Start with how many fixtures are affected. One slow sink usually points to its own trap or branch line. A tub, a toilet and a floor drain all slowing together point to the main house line or the lateral. Water that backs up out of the lowest drain in the house when another fixture runs is a strong sign that the shared line is restricted.',
        'Repeated clogs in the same line are often a sign of buildup along the wall or an obstruction that a cable only partly removes. Hydro jetting is meant for that situation, where the pipe is intact but coated or partly blocked. If a camera finds a belly, a crack or an offset joint, cleaning alone will only buy time.' ] },
      { title: 'Sanitary water versus storm water', paragraphs: [
        'The City of Norton points out that basement drains, sinks and toilets connect to the sanitary sewer unless the home has a septic tank, while roof drains, garage drains and footer drains connect to the storm sewer or ditches. Knowing which system is backing up decides who needs to respond.',
        'A backup that follows heavy rain suggests the storm side or groundwater, which cleaning a sanitary line cannot fix. A backup that follows laundry, showers or dishwashing is a sanitary problem. Writing down when it happens gives the next conversation a real starting point.' ] },
    ],
    points: [
      { title: 'A useful log', text: 'Note the date, the weather, which fixtures were in use and what backed up. A week of notes often shows the pattern.' },
      { title: 'One fixture or many', text: 'A single fixture usually means a local trap or branch. Several fixtures together suggest the shared line.' },
      { title: 'When cleaning is not enough', text: 'If the same line clogs again soon after jetting, a camera inspection is the next step to look for damage.' },
    ],
    faqs: [
      { question: 'Why does my drain clog again a few weeks after it is cleared?', answer: 'The first clearing may have opened a channel without removing the buildup on the pipe wall, or the line may have a defect that catches debris. Cleaning the full wall or looking inside with a camera addresses the cause.' },
      { question: 'Is my backup a sanitary problem or a storm problem?', answer: 'Basement drains, sinks and toilets are sanitary. Roof, garage and footer drains are storm. A backup tied to heavy rain points away from the sanitary line.' },
      { question: 'Should I keep using chemical drain cleaners?', answer: 'Repeated chemical use does not remove a heavy coating and can be hard on some pipe materials. If a drain needs it repeatedly, the line likely needs a closer look.' },
    ],
    sources: [SEWER_PAGE],
  },
  {
    slug: 'mineral-and-scale-deposits', kind: 'service', path: '/services/mineral-and-scale-deposits', name: 'Mineral and Scale Deposits',
    image: '/images/library/mineral-scale-macro-42.jpg', imageAlt: 'Water jets removing mineral scale from the inside wall of a pipe',
    title: 'Mineral and Scale Deposits in Norton, OH Drain Lines | Norton Hydro Jetting Pros',
    description: 'How mineral scale forms inside older drain lines in Norton, Ohio, and where hydro jetting can help remove it from the pipe wall.',
    headline: 'Mineral and scale deposits in older drain lines',
    intro: 'Hard mineral scale grows slowly on the inside of older drain pipes and reduces the opening without any single dramatic clog. Norton has many homes with decades-old plumbing, and scale is one reason a line can feel permanently sluggish.',
    summary: 'Hydro jetting to scour hardened mineral and scale deposits from the interior of a drain line.',
    sections: [
      { title: 'How scale forms', paragraphs: [
        'Water carries dissolved minerals, and some of them leave a hard crust where wastewater dries or slows inside a pipe. Over many years the crust builds into a rough lining that narrows the passage and catches paper, hair and grease. Rough pipe walls clog faster than smooth ones, so a scaled line tends to need repeated clearing.',
        'A cable usually passes through scale without removing it. Hydro jetting uses pressurized water to scour the interior, and with the right nozzle it can take down much of the deposit on a sound line. Heavily corroded or thin-walled pipe is a different story, and a camera look first is the careful way to decide.' ] },
      { title: 'Older Norton plumbing', paragraphs: [
        'Norton was farmland and small hamlets until it became a village in 1961 and a city in 1969, so housing runs from long-standing homes with older plumbing to streets built after the city formed. Older iron or clay-era lines are the ones most likely to carry heavy scale.',
        'Scale is a condition of the pipe, not of the sewer system around it. The line inside the property is the owner\'s responsibility, so a scaled lateral is something to raise with a drain professional before it turns into a recurring backup. Sooner or later a worn section may call for repair, and a camera view helps plan for that.' ] },
    ],
    points: [
      { title: 'Signs of scale', text: 'Drains that are slow everywhere in the house, rough or flaking material in the trap, and clogs that return soon after clearing.' },
      { title: 'What we want to know', text: 'The pipe material if you know it, the age of the plumbing and whether any section has been replaced.' },
      { title: 'Limits to keep in mind', text: 'Jetting is for sound pipe. Fragile or badly corroded pipe may need repair instead of aggressive cleaning.' },
    ],
    faqs: [
      { question: 'Can a cable remove scale?', answer: 'A cable usually cuts a channel through scale and leaves most of the deposit on the wall. Hydro jetting works around the full circumference of the pipe.' },
      { question: 'Is every older pipe safe to jet?', answer: 'No. Pipe condition decides it, and fragile or badly corroded pipe may be better served by inspection and repair. That is why a camera view is useful first.' },
      { question: 'Will scale come back after cleaning?', answer: 'Minerals in water keep depositing over time, so a cleaned line can slowly rebuild. Periodic checks are the practical answer.' },
    ],
    sources: [{ label: 'City of Norton government history', url: 'https://www.cityofnorton.org/212/Government-History' }],
  },
  {
    slug: 'preventative-maintenance', kind: 'service', path: '/services/preventative-maintenance', name: 'Preventative Maintenance',
    image: '/images/library/sparkling-finish-23.jpg', imageAlt: 'Clean interior of a drain pipe after hydro jetting',
    title: 'Preventative Drain Maintenance in Norton, OH | Norton Hydro Jetting Pros',
    description: 'Planned drain line cleaning for Norton, Ohio homes and businesses, why a clean line avoids emergency backups, and what to know about septic and sewer connections.',
    headline: 'Preventative maintenance for Norton drain lines',
    intro: 'Most backups give warnings first: slow fixtures, odors, gurgling. A scheduled cleaning before the line fails is calmer than a backup at night. In Norton the plan also depends on whether the property is on sewer or septic, which is worth settling at the start.',
    summary: 'Planned cleaning and inspection to keep a drain line open before it fails.',
    sections: [
      { title: 'Why a clean line matters', paragraphs: [
        'A line that is already coated has less margin for the next load of laundry, a heavy holiday meal or a few weeks of growing roots. Cleaning it on a plan gives that margin back. It also gives a chance to look inside with a camera and catch a cracked or offset section before it becomes an emergency.',
        'Hydro jetting is a good fit for a planned visit because it cleans the whole wall instead of opening a single channel. The right interval depends on the line, the household and the history of backups. A property with no problems may need a long gap, and one with recurring problems may need shorter ones.' ] },
      { title: 'Sewer or septic first', paragraphs: [
        'Norton has both. Neighborhoods that were once on septic have been connected to sewer in stages, and some homes remain on septic systems. Summit County Public Health says a typical septic system lasts 20 to 25 years if properly maintained, and that it inspects septic systems before homes with them change hands.',
        'Cleaning the pipe that leads to a septic tank is a different job from servicing the tank or drain field. A maintenance plan for a septic home should keep those two apart. For a sewer-connected home, the lateral is the owner\'s responsibility, so a plan there should focus on that run.' ] },
    ],
    points: [
      { title: 'Good times to plan a visit', text: 'Before selling a home, after a run of slow drains, before a big family season, or after a root problem has been cut back.' },
      { title: 'Businesses and shared lines', text: 'Kitchens and busy restrooms load a line faster than a typical household, so a regular plan often fits them better.' },
      { title: 'Records help', text: 'Keep notes on past backups, camera findings and any repairs. They shorten the next conversation.' },
    ],
    faqs: [
      { question: 'How often should a drain line be cleaned?', answer: 'It depends on the line, the household and the history of problems. A line with no history may only need an occasional check, while one with recurring slow drains benefits from a shorter interval.' },
      { question: 'Does a home sale involve inspections of septic systems?', answer: 'Summit County Public Health requires an inspection by a registered contractor before a home with a septic system or private water system is transferred. It is a separate process from cleaning a drain pipe.' },
      { question: 'Is a camera inspection part of maintenance?', answer: 'It can be. A camera shows pipe condition and often explains why a line keeps clogging.' },
    ],
    sources: [
      { label: 'Summit County Public Health sewage treatment systems', url: 'https://www.scph.org/water-quality/sewage-treatment-systems' },
      { label: 'Summit County Public Health point of sale program', url: 'https://www.scph.org/water-quality/point-sale' },
    ],
  },
  {
    slug: 'how-hydro-jetting-works', kind: 'guide', path: '/hydro-jetting', name: 'How Hydro Jetting Works',
    image: '/images/library/pipe-blueprint-4.jpg', imageAlt: 'Rotating water jets cleaning the inside wall of a pipe',
    title: 'How Hydro Jetting Works | Norton Hydro Jetting Pros',
    description: 'A plain-language guide to how hydro jetting cleans a drain line, what equipment is involved and what kinds of pipe it suits, with local context for Norton, Ohio.',
    headline: 'How hydro jetting works',
    intro: 'Hydro jetting cleans a drain from the inside using pressurized water. For a Norton homeowner the practical questions are what the water does to the buildup, which lines suit it and what it does not fix.',
    summary: 'A plain guide to what hydro jetting does inside the pipe and when it fits.',
    sections: [
      { title: 'What happens inside the line', paragraphs: [
        'A flexible hose carries water to a nozzle that is fed into the drain line through an access point such as a cleanout. The nozzle sends jets of water in several directions, and the thrust pulls the hose forward through the pipe. The jets loosen grease, sludge, scale and roots from the wall, and the flow carries the debris downstream.',
        'The key difference from a cable is coverage. A cable cuts a path through the middle of a blockage and leaves the wall coated. Jetting works around the full circumference, which is why it is used for buildup and recurring clogs. The nozzle type and the water pressure are chosen to fit the pipe and what is in it.' ] },
      { title: 'What it suits and what it does not', paragraphs: [
        'Jetting suits intact pipe with buildup, including grease, sludge, mineral scale and root growth at joints. It does not repair broken pipe, close a gap or straighten an offset, and it should not be used on pipe that a camera shows is too fragile. That is why looking inside first is part of good practice.',
        'In Norton the line from the house to the main belongs to the property owner, and the main belongs to the sewer authority that serves the address. Jetting is a tool for the owner\'s side of that line. Septic systems are a separate topic, since jetting cleans pipe but cannot change how a drain field absorbs water.' ] },
    ],
    points: [
      { title: 'Access matters', text: 'A cleanout or other access point lets the hose enter the line. Without one, a fixture trap or vent may need to be used, which is more limited.' },
      { title: 'Pipe condition decides', text: 'Pipe material, wall condition and any offsets all affect whether jetting is a good fit.' },
      { title: 'Cleaning is not repair', text: 'If a camera finds damage, cleaning may help for a while but the damage still needs attention.' },
    ],
    faqs: [
      { question: 'Does hydro jetting damage pipes?', answer: 'On sound pipe with the right nozzle and pressure, jetting is a standard cleaning method. Fragile or badly corroded pipe may not be a good candidate, which is why the condition of the line is checked first.' },
      { question: 'What is the difference between jetting and a drain cable?', answer: 'A cable cuts through the center of a blockage. Jetting cleans the full wall of the pipe with moving water, so it removes buildup a cable leaves behind.' },
      { question: 'Can jetting clear tree roots?', answer: 'It can cut and flush roots that have grown into a line, but it does not seal the joint they entered through, so roots can return.' },
    ],
    sources: [SEWER_PAGE],
  },
  {
    slug: 'hydro-jetting-vs-snaking', kind: 'guide', path: '/hydro-jetting-vs-snaking', name: 'Hydro Jetting vs Snaking',
    image: '/images/library/sonic-blast-8.jpg', imageAlt: 'Illustration of a jetting nozzle clearing buildup inside a drain pipe',
    title: 'Hydro Jetting vs Snaking | Norton Hydro Jetting Pros',
    description: 'How hydro jetting and drain snaking differ, when each makes sense and what to ask before choosing, written for Norton, Ohio homeowners.',
    headline: 'Hydro jetting vs snaking',
    intro: 'Both methods clear drains, but they work differently and suit different problems. Knowing the difference helps you decide what to ask for, especially when a line keeps clogging.',
    summary: 'A side-by-side look at how the two methods work and when each one fits.',
    sections: [
      { title: 'How the two methods differ', paragraphs: [
        'A snake, also called a cable or auger, is a rotating metal cable fed into the line. It breaks up or hooks a blockage and pulls it out, leaving a channel for water. It is quick and well suited to a single obstruction such as a clump of hair or a small object.',
        'Hydro jetting uses pressurized water from a nozzle to scour the whole pipe wall and flush debris downstream. It is better suited to buildup such as grease, sludge and scale, and to roots at joints. It needs access to the line and a pipe that is in sound condition.' ] },
      { title: 'Choosing for a Norton home', paragraphs: [
        'If a drain has never been a problem before and one fixture suddenly stops, a snake is a reasonable first move. If the same line has been cleared before and keeps slowing down, buildup on the wall is likely and a cable alone will not remove it.',
        'The pipe also matters. Older lines with scale or a rough interior may handle one method better than the other, and a camera view shows what the line looks like. The lateral from the house to the main is the property owner\'s responsibility according to the City of Norton, so the choice of method is usually the owner\'s to make with a drain professional.' ] },
    ],
    points: [
      { title: 'Snaking fits', text: 'A single fresh obstruction, a short run and a line with no history of repeat problems.' },
      { title: 'Jetting fits', text: 'Recurring clogs, grease or sludge coating, mineral scale and roots in an intact line.' },
      { title: 'Neither fits', text: 'Broken pipe, a collapsed section or a septic drain field problem. Those need inspection and repair.' },
    ],
    faqs: [
      { question: 'Is hydro jetting always better than snaking?', answer: 'No. A snake is a good tool for a single obstruction. Jetting is better for buildup along the wall and for recurring clogs.' },
      { question: 'Why does a snaked drain clog again?', answer: 'A snake opens a path but may leave the coating on the pipe wall. The remaining buildup catches new debris, and the line slows down again.' },
      { question: 'Do I need a camera inspection before choosing?', answer: 'It helps, especially for a repeating problem. A camera shows pipe condition and tells you whether cleaning will be enough.' },
    ],
    sources: [SEWER_PAGE],
  },
];

export const serviceList = services.filter((s) => s.kind === 'service');
export const guideList = services.filter((s) => s.kind === 'guide');
