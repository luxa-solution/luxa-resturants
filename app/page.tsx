import LuxaHome from '@/components/luxa-home'
import { buildStructuredData } from '@/lib/structured-data'

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData()) }}
      />
      <LuxaHome />
    </>
  )
}
