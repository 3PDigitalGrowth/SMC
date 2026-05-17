import type { MDXRemoteProps } from 'next-mdx-remote/rsc'
import KeyTakeaways from './mdx/KeyTakeaways'
import Callout from './mdx/Callout'
import CTA from './mdx/CTA'
import ComparisonTable from './mdx/ComparisonTable'
import Stats from './mdx/Stats'
import CaseStudy from './mdx/CaseStudy'

export const blogMdxComponents: MDXRemoteProps['components'] = {
  KeyTakeaways,
  Callout,
  CTA,
  ComparisonTable,
  Stats,
  CaseStudy,
}
