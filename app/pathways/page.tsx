
import PathwaysContainer from '@/components/pathways/pathways-container'

export const metadata = {
  title: 'Learning Pathways - AI Skill Development | Aya',
  description: 'Follow structured learning roadmaps for bigger AI projects. From side hustles to career advancement.',
}

export default function PathwaysPage() {
  return (
    <div className="min-h-screen py-12">
      <PathwaysContainer />
    </div>
  )
}
