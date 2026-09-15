interface FAQSchemaItem {
  q: string
  a: string
}

interface FAQSchemaProps {
  items: FAQSchemaItem[]
}

/** FAQPage JSON-LD mirroring the visible ServiceFAQ questions on a page. */
export default function FAQSchema({ items }: FAQSchemaProps) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}
