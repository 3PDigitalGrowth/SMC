import PageHero from '@/components/page/PageHero'
import InsightCard from '@/components/blog/InsightCard'
import Booking from '@/components/home/Booking'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { pageMetadata } from '@/lib/seo'
import { getAllPosts } from '@/lib/blog'
import { IMAGES } from '@/lib/images'
import styles from './page.module.css'

export const metadata = pageMetadata({
  path: '/insights',
  title: 'Insights from Steven M Clark Lawyers, Gawler.',
  description:
    'Plain-English articles on family law, estates, property and business, written by a Gawler practice since 1986.',
  image: IMAGES.insightsHero.src,
})

export default function InsightsIndex() {
  const posts = getAllPosts()

  return (
    <>
      <BreadcrumbSchema crumbs={[{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights' }]} />
      <PageHero
        eyebrow="Insights"
        heading={
          <>
            Plain-English notes on the law, from <em>Adelaide Road</em>.
          </>
        }
        lede="A handful of short reads on what comes up most often. Written by a Gawler practice serving the community since 1986, without the legalese."
        image={IMAGES.insightsHero}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          {posts.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyEyebrow}>Coming soon</p>
              <p className={styles.emptyHeading}>
                The first articles are being written. In the meantime, the practice pages cover the same ground in detail.
              </p>
            </div>
          ) : (
            <ul className={styles.list}>
              {posts.map((post) => (
                <li key={post.frontmatter.slug}>
                  <InsightCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Booking />
    </>
  )
}
