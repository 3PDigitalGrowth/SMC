import NotaryHub, { HUB_META } from './NotaryHub'
import ApostillePage, { META as APOSTILLE_META, SLUG as APOSTILLE_SLUG } from './ApostillePage'
import NotaryVsJPPage, { META as JP_META, SLUG as JP_SLUG } from './NotaryVsJPPage'
import ChecklistPage, { META as CHECKLIST_META, SLUG as CHECKLIST_SLUG } from './ChecklistPage'
import FeesPage, { META as FEES_META, SLUG as FEES_SLUG } from './FeesPage'
import OverseasPage, { META as OVERSEAS_META, SLUG as OVERSEAS_SLUG } from './OverseasPage'
import ServiceAreaPage, { META as AREA_META, SLUG as AREA_SLUG } from './ServiceAreaPage'
import { NOTARY_HUB_SLUG } from '@/components/notary/registry'

interface NotaryPageDef {
  meta: { title: string; description: string }
  render: (base: string) => React.ReactElement
}

export const NOTARY_PAGES: Record<string, NotaryPageDef> = {
  [NOTARY_HUB_SLUG]: { meta: HUB_META, render: (base) => <NotaryHub base={base} /> },
  [APOSTILLE_SLUG]: { meta: APOSTILLE_META, render: (base) => <ApostillePage base={base} /> },
  [JP_SLUG]: { meta: JP_META, render: (base) => <NotaryVsJPPage base={base} /> },
  [CHECKLIST_SLUG]: { meta: CHECKLIST_META, render: (base) => <ChecklistPage base={base} /> },
  [FEES_SLUG]: { meta: FEES_META, render: (base) => <FeesPage base={base} /> },
  [OVERSEAS_SLUG]: { meta: OVERSEAS_META, render: (base) => <OverseasPage base={base} /> },
  [AREA_SLUG]: { meta: AREA_META, render: (base) => <ServiceAreaPage base={base} /> },
}

export { NOTARY_HUB_SLUG }
