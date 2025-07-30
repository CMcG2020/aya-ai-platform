import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Cog, Lightbulb, Sparkles, Wrench, TrendingUp } from "lucide-react"

export default function MoreThanChatGPT() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            It's More Than ChatGPT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            AI isn't just about chatting with bots—it's a world of tools and possibilities designed to empower you. 
            Let's break it down simply, so you can start exploring with confidence.
          </p>
        </div>
      </section>

      {/* Educational Sections */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* What is AI? */}
            <Card className="card-hover bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">What is AI?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Artificial Intelligence (AI) is like a super-smart helper that mimics human thinking. It uses computers to learn from data, 
                  make decisions, and solve problems. Think of it as a digital brain that gets better with experience—far beyond just ChatGPT!
                </CardDescription>
              </CardContent>
            </Card>

            {/* How Does AI Work? */}
            <Card className="card-hover bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">How Does AI Work?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  AI learns by analyzing tons of examples (data) to spot patterns. It uses algorithms—like recipes—to process info and improve over time. 
                  For example, it might study thousands of photos to recognize faces, getting smarter with each "lesson."
                </CardDescription>
              </CardContent>
            </Card>

            {/* What Tools Are Available? */}
            <Card className="card-hover bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">What Tools Are Available?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  From image generators like DALL-E to writing helpers like Grammarly, AI tools help with creativity, productivity, and more. 
                  Explore our Toolkit for women-friendly options—many are free or low-cost, like Canva's Magic Studio or Google's Bard.
                </CardDescription>
              </CardContent>
            </Card>

            {/* How Does AI Develop? */}
            <Card className="card-hover bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">How Does AI Develop?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  AI evolves through "training" on data, much like practicing a skill. Developers feed it examples, and it refines itself. 
                  New versions (like GPT-4) build on old ones, getting faster and more accurate—exciting for everyday uses like personalized learning!
                </CardDescription>
              </CardContent>
            </Card>

            {/* Why It Matters for You */}
            <Card className="card-hover bg-card border-border md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-card-foreground">Why It Matters for You</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  AI can boost your career, spark creativity, or simplify daily life. As a woman in this space, you're joining a growing community—let's make it empowering and fun!
                </CardDescription>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="card-hover bg-gradient-to-r from-purple-600 to-pink-600 text-white md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Ready to Dive Deeper?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a href="/toolkit" className="btn-primary inline-block">
                  Explore AI Tools
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Embedded Videos Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Visual Explanations
            </span>
          </h2>
          <h2 className="text-4xl font-bold text-center mb-12">Watch and Learn</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/zjkBMFhNj_g" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.youtube.com/embed/uMzUB89uSxU" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}