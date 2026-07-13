import PageHero from '@/components/page/PageHero'
import Editorial from '@/components/home/Editorial'
import TeamGrid from '@/components/page/TeamGrid'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/about',
  title: 'About Steven M Clark Lawyers, Gawler. Since 1985.',
  description:
    'Admitted in 1983, commenced practice in 1985, serving the Gawler community ever since. The story of Steven M Clark Lawyers, in plain words.',
  image: IMAGES.aboutHero.src,
})

const team = [
  {
    name: 'Steven M Clark',
    role: 'Principal Solicitor, Public Notary',
    photo: IMAGES.bioSteven.src,
    photoAlt: IMAGES.bioSteven.alt,
    bio: 'Admitted in 1983 and principal of the firm he founded. A Gawler local since 1971, and the only Public Notary between North Adelaide and the Riverland.',
    fullBio: [
      'Steven was admitted to practise in 1983 and has since maintained a longstanding practice in general law. He holds a law degree from the University of Adelaide and a graduate qualification in legal practice from the former Institute of Technology, now part of the University of Adelaide. In 1985, he established Steven M Clark Lawyers and has served as its principal continuously since that time.',
      'Steven and his family have resided in Gawler since 1971. He is married and has seven children, together with a growing number of grandchildren.',
      'Steven has demonstrated a longstanding commitment to community organisations and local initiatives through extensive voluntary service. He was instrumental in the establishment of both the Trinity College Foundation and the Gawler Health Service Foundation. He served on the Board of the Central District Football Club from 2006 to 2020 as both a director and club solicitor, and in recognition of that service was awarded life membership. He remains the Club Solicitor today. In addition, he has served as a director of the Trinity College Foundation, the Gawler Hospital Foundation, and the Gawler Business Development Board.',
      'On 2 July 2016, Steven was awarded the Paul Harris Fellowship at the Rotary Club of Gawler Light handover dinner held at the Hewett Centre, in recognition of his tangible and significant service in advancing goodwill, understanding, and friendly relations among people throughout the world.',
    ],
  },
  {
    name: 'Zahra Amin',
    role: 'Solicitor',
    photo: IMAGES.bioZahra.src,
    photoAlt: IMAGES.bioZahra.alt,
    bio: 'Family law, criminal law and dispute resolution, with experience across the legal systems of Pakistan, the United Kingdom and Australia.',
    fullBio: [
      'Zahra Amin is a dedicated legal practitioner with extensive experience in family law, criminal law, and dispute resolution across multiple jurisdictions. Having practised law in Pakistan for over seven years before relocating to Australia, Zahra brings a unique international perspective and a strong commitment to achieving practical and effective outcomes for clients.',
      'She graduated with a Bachelor of Laws (LLB) from Queen Mary University of London in 2017 and commenced legal practice in Pakistan shortly thereafter. During her legal career overseas, she regularly appeared before courts and tribunals, representing clients in a broad range of family law and criminal law matters. Her experience includes advising clients through complex disputes, negotiating settlements, preparing court documents, and acting as counsel in contested proceedings.',
      'In pursuit of admission to legal practice in Australia, Zahra completed the required academic equivalency subjects through Deakin University and subsequently completed her Practical Legal Training through The College of Law. She is admitted to practise in the Supreme Court of Victoria, the Supreme Court of South Australia, and the High Court of Australia, is a member of the Law Society of South Australia, and is an Australian citizen.',
      'With direct experience across the legal systems of Pakistan, the United Kingdom, and Australia, Zahra possesses valuable insight into diverse legal frameworks, cultural backgrounds, and client needs. This international experience enables her to effectively assist clients from a wide range of communities and backgrounds, particularly those navigating legal issues across different jurisdictions.',
      'Known for her approachable manner, attention to detail, and strong advocacy skills, Zahra is committed to providing high-quality legal representation while ensuring clients feel informed and supported throughout every stage of their matter. Outside of legal practice, she is actively engaged in her local community, which further strengthens her ability to connect with and effectively represent a diverse range of clients.',
    ],
  },
  {
    name: 'Jack Clark',
    role: 'Solicitor',
    photo: IMAGES.bioJack.src,
    photoAlt: IMAGES.bioJack.alt,
    bio: 'A Gawler-based lawyer who believes legal advice should be clear and practical, never overwhelming.',
    fullBio: [
      'Jack is a Gawler-based lawyer who sincerely cares about the law and the people he works with. He studied law at the University of South Australia, graduating with a Bachelor of Laws (Honours), and completed his Graduate Diploma of Legal Practice through the College of Law.',
      'Jack believes that legal advice should be clear and practical, never overwhelming. He enjoys helping his clients understand the process and strives at each step to make their experience as easy and as stress-free as possible.',
      'Outside of work, Jack is happiest when outdoors, whether skateboarding, cycling, hiking, or gardening. He also has a deep love of music and all things vintage.',
    ],
  },
  {
    name: 'Mahima Sobti',
    role: 'Solicitor',
    photo: IMAGES.bioMahima.src,
    photoAlt: IMAGES.bioMahima.alt,
    bio: 'General practice, with particular interests in family law, medical negligence, and corporate and commercial matters. With the firm since 2023.',
    fullBio: [
      "Mahima is a Solicitor at Steven M Clark Lawyers, providing practical, client-focused legal advice across a broad range of practice areas. Her international educational background and experience working with people from diverse cultural and professional backgrounds allow her to approach legal issues with insight, adaptability, and a strong understanding of clients' varied needs.",
      'Mahima was admitted as a solicitor in the Supreme Court of South Australia and the High Court of Australia in March 2026 and is also a member of the Law Society of South Australia. She joined the firm in 2023 initially as a paralegal while completing her Bachelor of Laws at Flinders University and Practical Legal Training through Leo Cussen, and worked in that role for over two years before joining the practice as a solicitor.',
      'During her time at the firm, she has developed experience across general practice matters, including file management, client communication, legal research, and the preparation of court documents and correspondence. She practises across all areas of general practice, with particular interests in family law, medical negligence, and corporate and commercial matters. Mahima also holds a Master of Business Administration (MBA) from Canada, which adds valuable commercial insight when advising business clients.',
      'She is committed to delivering clear, practical advice and guiding clients through complex legal issues with professionalism and care. Outside of work, Mahima enjoys spending time with family and friends, travelling, and maintaining interests that support balance and wellbeing. She values continuous improvement and remains committed to both her professional development and her connection with the community.',
    ],
  },
  {
    name: 'Sophie Clark',
    role: 'Legal Secretary, Paralegal',
    bio: 'More than 21 years of dedicated service. A highly experienced Paralegal known for professionalism, reliability and exceptional client service.',
    fullBio: [
      'With more than 21 years of dedicated service, Sophie is a highly experienced Paralegal who has built a reputation for professionalism, reliability, and exceptional client service. Throughout her career, she has worked closely with solicitors across a broad range of legal matters, providing invaluable support through every stage of the legal process.',
      'Known for her meticulous attention to detail, strong organisational skills, and practical approach, Sophie is committed to ensuring matters are managed efficiently and clients feel informed and supported. Her extensive experience allows her to anticipate the needs of both clients and legal practitioners, helping to deliver seamless outcomes.',
      'Having been an integral member of the firm for over two decades, Sophie is valued not only for her legal knowledge and expertise but also for the trusted relationships she has developed with colleagues and clients alike. She takes pride in contributing to a collaborative team environment and is dedicated to maintaining the high standard of service the firm is known for.',
    ],
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
            A Gawler firm, run by a <em>Gawler local</em>, since 1985.
          </>
        }
        lede="Steven has lived in Gawler since 1971 and commenced practice here in 1985. The firm has continued serving the Gawler community ever since. That is the short version. The longer version sits below."
        image={IMAGES.aboutHero}
        wideImage
      />

      <Editorial image={IMAGES.aboutEditorial} />

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
