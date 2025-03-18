import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function FeatureShowcase() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience Pis</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Minimalist Design</h3>
              <p className="text-gray-400">
                Enjoy a clean, distraction-free interface with our signature black and white design that focuses on
                content and connections.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Audio Sharing</h3>
              <p className="text-gray-400">
                Share voice messages and audio clips with your network. Our intuitive audio player makes listening a
                seamless experience.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Public & Friends Feeds</h3>
              <p className="text-gray-400">
                Switch between public content and posts from your friends with our easy toggle system.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d4megoqK34qSs5eFSLWDrtqeO4Y6CB.png"
                    alt="Audio Player Feature"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden mt-8">
              <CardContent className="p-0">
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A6Yl5GgSAgFf9a08RJNsJishRqcyCk.png"
                    alt="Feed Feature"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

