
import Link from 'next/link'
import { Sparkles, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Aya</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering women to confidently use AI in their everyday lives. 
              Discover tools, learn skills, and join a community of AI-savvy women.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <span>hello@ayaplatform.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/quiz" className="text-gray-300 hover:text-white transition-colors">Spark Quiz</Link></li>
              <li><Link href="/discovery" className="text-gray-300 hover:text-white transition-colors">Discovery Hub</Link></li>
              <li><Link href="/sandbox" className="text-gray-300 hover:text-white transition-colors">Sandbox</Link></li>
              <li><Link href="/pathways" className="text-gray-300 hover:text-white transition-colors">Pathways</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/toolkit" className="text-gray-300 hover:text-white transition-colors">AI Toolkit</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">Latest News</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Aya x AI. Made with <Heart className="w-4 h-4 inline text-pink-500" /> for women worldwide.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms</Link>
            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors">About</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
