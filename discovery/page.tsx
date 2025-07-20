
import DiscoveryHub from '@/components/discovery/discovery-hub'

export const metadata = {
  title: 'Discovery Hub - AI Ideas & Inspiration | Aya',
  description: 'Explore curated AI ideas, tool spotlights, and success stories. Discover what\'s possible with artificial intelligence.',
}

export default function DiscoveryPage() {
  return (
    <div className="min-h-screen py-12">
      <DiscoveryHub />
    </div>
  )
}
