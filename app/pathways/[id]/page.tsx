
import { notFound } from 'next/navigation'
import PathwayDetail from '@/components/pathways/pathway-detail'
import { pathways } from '@/lib/pathways-data'

interface PathwayPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return pathways.map((pathway) => ({
    id: pathway.id,
  }))
}

export async function generateMetadata({ params }: PathwayPageProps) {
  const pathway = pathways.find(p => p.id === params.id)
  
  if (!pathway) {
    return {
      title: 'Pathway Not Found | Aya',
    }
  }

  return {
    title: `${pathway.section} | Aya Learning Pathways`,
  }
}

export default function PathwayPage({ params }: PathwayPageProps) {
  const pathway = pathways.find(p => p.id === params.id)

  if (!pathway) {
    notFound()
  }

  return <PathwayDetail pathway={pathway} />
}
