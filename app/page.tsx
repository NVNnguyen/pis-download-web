import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageSquare, Share2 } from "lucide-react";
import FeatureShowcase from "@/components/feature-showcase";
import AppPreview from "@/components/app-preview";
import DownloadButton from "@/components/download-button";
import DirectDownloadSection from "@/components/direct-download-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-PvnWjFjA5o5VYhXIDDQFQ5fhCO0FLR.png"
            alt="Pis Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold">Pis</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="hover:text-gray-300 transition">
            Features
          </a>
          <a href="#screenshots" className="hover:text-gray-300 transition">
            Screenshots
          </a>
          <a href="#download" className="hover:text-gray-300 transition">
            Download
          </a>
        </nav>
        <Button
          variant="outline"
          className="hidden md:flex border-gray-700 hover:bg-gray-800"
        >
          Contact Us
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Connect with Pis Social Network
          </h1>
          <p className="text-gray-400 text-lg">
            A minimalist social platform designed for meaningful connections
            with a clean black and white interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <DownloadButton
              size="lg"
              className="bg-white text-black hover:bg-gray-200"
            >
              Download APK
            </DownloadButton>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 hover:bg-gray-800"
            >
              Learn More
            </Button>
          </div>
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
      </section>

      <FeatureShowcase />

      {/* Features Section */}
      <section id="features" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-full">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Connect with Friends</h3>
                  <p className="text-gray-400">
                    Build your network and stay connected with friends and
                    family.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-full">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Messaging</h3>
                  <p className="text-gray-400">
                    Send messages, photos, and videos to your connections
                    instantly.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black border-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-gray-800 rounded-full">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Share Content</h3>
                  <p className="text-gray-400">
                    Share your moments, thoughts, and experiences with your
                    network.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            App Screenshots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yf5QahtzFD2FAKopOgakgoeJIX0Hs1.png"
                alt="Splash Screen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d4megoqK34qSs5eFSLWDrtqeO4Y6CB.png"
                alt="Audio Player Screen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-A6Yl5GgSAgFf9a08RJNsJishRqcyCk.png"
                alt="Feed Screen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <AppPreview />

      {/* Download Section */}
      {/* <section id="download" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Download Pis Now</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Experience the minimalist social network designed for Android. Download our APK file directly from our
            website.
          </p>

          <DirectDownloadSection />

          <div className="mt-8 text-sm text-gray-500">
            <p>Compatible with Android 8.0 and above</p>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-PvnWjFjA5o5VYhXIDDQFQ5fhCO0FLR.png"
                alt="Pis Logo"
                width={30}
                height={30}
                className="w-8 h-8"
              />
              <span className="font-bold">Pis from v-team</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Contact
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 Pis. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
