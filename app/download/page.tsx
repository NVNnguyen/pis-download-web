import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"
import DownloadButton from "@/components/download-button"

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8 px-4">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Download Pis Social Network</h1>

            <Card className="bg-gray-900 border-gray-800 mb-8">
              <CardHeader>
                <CardTitle>Latest Version</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h3 className="font-bold">Pis v1.0.0</h3>
                    <p className="text-gray-400 text-sm">Released: March 18, 2025</p>
                    <p className="text-gray-400 text-sm">Size: 15MB</p>
                    <p className="text-gray-400 text-sm mt-1">
                      File: application-81c37806-9954-46df-a436-26837bee5bc4.apk
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <DownloadButton className="bg-white text-black hover:bg-gray-200">Download APK</DownloadButton>
                    <Link
                      href="https://drive.google.com/file/d/11Hx3DaHecO_SwGK9--JspEj-P4pMnwh1/view?usp=sharing"
                      target="_blank"
                    >
                      <Button variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" /> Google Drive
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-3">Installation Instructions</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Download the APK file to your Android device</li>
                  <li>Open the file to begin installation</li>
                  <li>If prompted, enable "Install from Unknown Sources" in your device settings</li>
                  <li>Follow the on-screen instructions to complete installation</li>
                  <li>Open the app and create your account</li>
                </ol>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">System Requirements</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Android 8.0 (Oreo) or higher</li>
                  <li>At least 100MB of free storage</li>
                  <li>2GB RAM or higher recommended</li>
                  <li>Internet connection required</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">App Features</h2>
              <div className="grid grid-cols-1 gap-4">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative w-24 h-48 md:w-32 md:h-64 flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A6Yl5GgSAgFf9a08RJNsJishRqcyCk.png"
                          alt="Feed View"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Social Feed</h3>
                        <p className="text-gray-400">
                          Browse posts from friends and public content in our clean, distraction-free interface.
                        </p>
                        <ul className="list-disc list-inside mt-2 text-gray-300 text-sm">
                          <li>Toggle between public and friends-only content</li>
                          <li>Like and comment on posts</li>
                          <li>Share media and links</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="relative w-24 h-48 md:w-32 md:h-64 flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d4megoqK34qSs5eFSLWDrtqeO4Y6CB.png"
                          alt="Audio Player"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Audio Sharing</h3>
                        <p className="text-gray-400">Record and share audio clips with your network.</p>
                        <ul className="list-disc list-inside mt-2 text-gray-300 text-sm">
                          <li>Visualize audio with waveform display</li>
                          <li>Control playback with simple player</li>
                          <li>Share voice notes publicly or with friends</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-8">
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-PvnWjFjA5o5VYhXIDDQFQ5fhCO0FLR.png"
                      alt="Pis Logo"
                      width={80}
                      height={80}
                      className="w-20 h-20"
                    />
                    <h3 className="text-xl font-bold">Pis Social Network</h3>
                    <p className="text-gray-400">Connect with friends in a minimalist black and white interface.</p>
                    <DownloadButton className="w-full bg-white text-black hover:bg-gray-200">
                      Download APK
                    </DownloadButton>
                    <Link
                      href="https://drive.google.com/file/d/11Hx3DaHecO_SwGK9--JspEj-P4pMnwh1/view?usp=sharing"
                      target="_blank"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" /> Google Drive
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-gray-800 hover:bg-gray-800 flex-col h-auto py-4">
                  <FileText className="h-6 w-6 mb-2" />
                  <span>Release Notes</span>
                </Button>
                <Button variant="outline" className="border-gray-800 hover:bg-gray-800 flex-col h-auto py-4">
                  <Shield className="h-6 w-6 mb-2" />
                  <span>Verify APK</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

