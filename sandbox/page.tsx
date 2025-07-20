
import SandboxContainer from '@/components/sandbox/sandbox-container'

export const metadata = {
  title: 'The Sandbox - Practice AI Skills | Aya',
  description: 'Practice with guided AI recipes and templates. Learn by doing with step-by-step prompts and exercises.',
}

export default function SandboxPage() {
  return (
    <div className="min-h-screen py-12">
      <SandboxContainer />
    </div>
  )
}
