
import ToolkitContainer from '@/components/toolkit/toolkit-container'

export const metadata = {
  title: 'AI Toolkit - Curated AI Tools Directory | Aya',
  description: 'Browse our vetted directory of AI tools with plain English descriptions, pricing, and real use cases.',
}

export default function ToolkitPage() {
  return (
    <div className="min-h-screen py-12">
      <ToolkitContainer />
    </div>
  )
}
