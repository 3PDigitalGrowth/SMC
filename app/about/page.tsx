import PageHero from '@/components/page/PageHero'
import Editorial from '@/components/home/Editorial'
import TeamGrid from '@/components/page/TeamGrid'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/about',
  title: 'About Steven M Clark Lawyers, Gawler. Since 1986.',
  description:
    'Admitted in 1983, commenced practice in 1986, serving the Gawler community ever since. The story of Steven M Clark Lawyers, in plain words.',
  image: IMAGES.aboutHero.src,
})

const team = [
  {
    name: 'Steven M Clark',
    role: 'Principal Solicitor, Public Notary',
    bio: 'Admitted 1983. Adelaide University law, graduate practice at the South Australian Institute of Technology (now UniSA). Commenced practice in 1986 and has continued serving the Gawler community ever since. The only Public Notary between North Adelaide and the Riverland.',
  },
  {
    name: 'Zahra Amin',
    role: 'Solicitor',
    bio: 'Day-to-day work across family, estates and general practice files. Often the first person you will sit across from after the initial call.',
  },
  {
    name: 'Jack Clark',
    role: 'Solicitor',
    bio: 'Property, business and commercial files. Local, accessible, direct.',
  },
  {
    name: 'Mahima Sobti',
    role: 'Solicitor',
    bio: "Steven's diary, his calls, his correspondence. The reason he can give you a same-business-day reply.",
  },
  {
    name: 'Sophie Clark',
    role: 'Legal Secretary, Paralegal',
    bio: 'The reason your file is where it should be when you ring up. Drafts, lodgements, and the careful work that keeps a matter on track.',
  },
  {
    name: 'Rachel East',
    role: 'Administration',
    bio: 'Files, accounts and the rhythm of the office. The other reason things land on time.',
  },
  {
    name: 'Emma Vandenham',
    role: 'Reception',
    bio: 'The voice on the other end of (08) 8522 6025. You will speak to a person, not a queue.',
  },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
      <PageHero
        eyebrow="About the firm"
        heading={
          <>
            A Gawler firm, run by a <em>Gawler local</em>, since 1986.
          </>
        }
        lede="Steven has lived in Gawler since 1971 and commenced practice here in 1986. The firm has continued serving the Gawler community ever since. That is the short version. The longer version sits below."
        image={IMAGES.aboutHero}
      />

      <Editorial />

      <TeamGrid
        eyebrow="The people"
        heading={
          <>
            Seven of us, working on the same files, on the same street, every week.
          </>
        }
        members={team}
      />

      <Booking />
    </>
  )
}
