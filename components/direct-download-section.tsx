import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileDown, ExternalLink } from "lucide-react"
import Link from "next/link"
import DownloadButton from "./download-button"

export default function DirectDownloadSection() {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-6">
                <h2 className="text-2xl font-bold text-white">Tải xuống Pis Social Network</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="flex flex-col gap-2 items-center p-4 border border-gray-800 rounded-lg">
                    <FileDown className="h-8 w-8 text-white mb-2" />
                    <h3 className="font-semibold text-white">Tải xuống trực tiếp</h3>
                    <p className="text-sm text-gray-400 mb-4">Tải xuống APK trực tiếp từ máy chủ của chúng tôi</p>
                    <DownloadButton className="w-full bg-white text-black hover:bg-gray-200">
                      Tải xuống APK
                    </DownloadButton>
                  </div>

                  <div className="flex flex-col gap-2 items-center p-4 border border-gray-800 rounded-lg">
                    <ExternalLink className="h-8 w-8 text-white mb-2" />
                    <h3 className="font-semibold text-white">Tải từ Google Drive</h3>
                    <p className="text-sm text-gray-400 mb-4">Tải xuống APK từ Google Drive</p>
                    <Link
                      href="https://drive.google.com/file/d/11Hx3DaHecO_SwGK9--JspEj-P4pMnwh1/view?usp=sharing"
                      target="_blank"
                      className="w-full"
                    >
                      <Button className="w-full" variant="outline">
                        Mở Google Drive
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                  <p>Tên file: application-81c37806-9954-46df-a436-26837bee5bc4.apk</p>
                  <p className="mt-1">Phiên bản: 1.0.0 | Kích thước: 15MB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

