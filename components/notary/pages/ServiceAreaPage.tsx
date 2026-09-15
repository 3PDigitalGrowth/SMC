import PageHero from '@/components/page/PageHero'
import ServiceBody from '@/components/page/ServiceBody'
import ServiceCallout from '@/components/page/ServiceCallout'
import ServiceFAQ from '@/components/page/ServiceFAQ'
import RelatedServices from '@/components/page/RelatedServices'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQSchema from '@/components/seo/FAQSchema'
import { IMAGES } from '@/lib/images'
import { NOTARY_HUB_SLUG, hubLink, notaryHref, spokeLinks } from '@/components/notary/registry'

export const SLUG = 'notary-public-northern-adelaide-barossa'

export const META = {
  title: 'Notary Public for northern Adelaide and the Barossa. Gawler office.',
  description:
    'The only Public Notary between North Adelaide and the Riverland. Serving Elizabeth, Salisbury, Munno Para, Angle Vale, Two Wells, Roseworthy, Kapunda, Tanunda and Nuriootpa from 1 Adelaide Road, Gawler South. One visit, DFAT lodged for you.',
}

const aside = [
  '1 Adelaide Road, Gawler South SA 5118',
  'Monday to Friday, 9:00am to 5:00pm',
  'Parking beside the office',
  'Appointments usually within a day or two',
  'Phone (08) 8522 6025',
]

const callouts = [
  {
    title: 'Northern suburbs',
    body: 'Elizabeth, Salisbury, Munno Para, Smithfield, Angle Vale, Virginia, Two Wells, Craigmore, Blakeview. For most of the north we are closer than the city and the drive is against the traffic. No parking meters and no waiting room queue.',
  },
  {
    title: 'The Barossa and Light',
    body: 'Tanunda, Nuriootpa, Angaston, Lyndoch, Williamstown, Kapunda, Freeling, Roseworthy, Mallala. Gawler is the natural first stop on the way to Adelaide, and for a 20-minute notarisation it is the only stop you need to make.',
  },
  {
    title: 'The Mid North and beyond',
    body: 'Clare, Balaklava, Eudunda and the towns between. We are the last Public Notary before the city. Send the documents ahead, book a time, and make the one trip count: we can lodge with DFAT for you afterwards so there is no second journey.',
  },
]

const faq = [
  {
    q: 'Do I need an appointment?',
    a: 'Yes, please. Notarial work needs the Notary personally, and Steven is in and out of court. Ring (08) 8522 6025 or use the callback form. We can usually see you within a day or two, sometimes the same day for a single document.',
  },
  {
    q: 'Can you come to me?',
    a: 'For hospital, aged care or mobility reasons we can sometimes attend within the Gawler district. Ask when you book. For most people the office visit is quicker and the fee is lower.',
  },
  {
    q: 'Is there really no other Notary north of Adelaide?',
    a: 'Between North Adelaide and the Riverland, we are the only Public Notary. That is why we see people from the whole northern region and the Barossa, and why we built the process to be done in a single visit.',
  },
  {
    q: 'Can you lodge with DFAT so I do not have to go to the city?',
    a: 'Yes. Lodging the apostille or authentication with DFAT is part of the job if you want it. You come to Gawler once, and the document comes back with the DFAT certificate attached.',
  },
  {
    q: 'Where do I park?',
    a: 'Beside the office at 1 Adelaide Road, Gawler South. If you have mobility needs, tell us when you book and we will make the appointment work for you.',
  },
]

export default function ServiceAreaPage({ base }: { base: string }) {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Public Notary', href: notaryHref(base, NOTARY_HUB_SLUG) }, { name: 'Northern Adelaide and Barossa', href: notaryHref(base, SLUG) }]} />
      <FAQSchema items={faq} />
      <PageHero
        eyebrow="Notary Public · Northern Adelaide and the Barossa"
        heading={<>The last Public Notary <em>before the city</em>.</>}
        lede="If you live north of Adelaide, the nearest Notary is not in the CBD. It is at 1 Adelaide Road, Gawler South, with parking beside the office and appointments most days. We serve Elizabeth, Salisbury, Munno Para, Roseworthy, Kapunda, Tanunda, Nuriootpa and everywhere between, and we lodge with DFAT so you make one trip, not two."
        image={IMAGES.gawlerStreet}
        wideImage
      />
      <ServiceBody
        eyebrow="Why Gawler"
        heading={<>Closer, quicker, and the whole job in one visit.</>}
        paragraphs={[
          'Between North Adelaide and the Riverland, this office is the only Public Notary. People assume a Notary means a trip to King William Street. For anyone in the northern suburbs, the Barossa, the Light or the Mid North, Gawler is closer, parking is easier, and the appointment takes 15 to 30 minutes.',
          'We have arranged the work so that one trip is enough. Send the document and the overseas instructions ahead and we check them before you arrive. At the appointment we verify your identity, witness or attest, and seal the certificate. If the destination needs a DFAT apostille or authentication, we prepare the lodgement and can send it to DFAT for you, so there is no second journey to the city.',
          'Steven M Clark has been Gawler\'s Public Notary for decades and the firm has been on Adelaide Road since 1985. Most of the people who come to us for notarial work have never needed a lawyer before and do not need one now; they need a document accepted on the other side of the world. That is the whole service, and we keep it plain.',
        ]}
        asideTitle="The office"
        asideItems={aside}
      />
      <ServiceCallout eyebrow="Who comes to us" heading={<>Across the north, the Barossa and the Mid North.</>} items={callouts} />
      <ServiceFAQ eyebrow="Common questions" heading={<>Getting here and getting it done.</>} items={faq} />
      <RelatedServices eyebrow="Keep reading" heading={<>Before your appointment.</>} items={[hubLink(base), ...spokeLinks(base, SLUG).slice(2, 4)]} />
      <Booking />
    </>
  )
}
