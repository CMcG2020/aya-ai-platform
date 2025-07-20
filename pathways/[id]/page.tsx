
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
    id: pathway.id.toString(),
  }))
}

export async function generateMetadata({ params }: PathwayPageProps) {
  const pathway = pathways.find(p => p.id === parseInt(params.id))
  
  if (!pathway) {
    return {
      title: 'Pathway Not Found | Aya',
    }
  }

  return {
    title: `${pathway.title} | Aya Learning Pathways`,
    description: pathway.description,
  }
}

export default function PathwayPage({ params }: PathwayPageProps) {
  const pathway = pathways.find(p => p.id === parseInt(params.id))

  if (!pathway) {
    notFound()
  }

  return <PathwayDetail pathway={pathway} />
}
