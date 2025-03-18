import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AppPreview() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-white">Pis Social Network</h2>
            <p className="text-gray-400 mb-8">
              A modern social platform with a focus on simplicity and meaningful connections. Our black and white
              interface eliminates distractions and lets you focus on what matters.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mt-0.5">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Download the APK</h3>
                  <p className="text-gray-400">Get the latest version directly from our website</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mt-0.5">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Install the App</h3>
                  <p className="text-gray-400">Follow the simple installation instructions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center mt-0.5">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-white">Create Your Account</h3>
                  <p className="text-gray-400">Join the community and start connecting</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-8 bg-white text-black hover:bg-gray-200">
              <Download className="mr-2 h-5 w-5" /> Download Now
            </Button>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-[500px] border-8 border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yf5QahtzFD2FAKopOgakgoeJIX0Hs1.png"
                alt="Pis App Screenshot"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

