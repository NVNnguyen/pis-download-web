import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import UploadAPK from "@/components/upload-apk"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-8 px-4">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> Quay lại trang chủ
        </Link>

        <h1 className="text-3xl font-bold mb-8">Quản trị trang web</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <UploadAPK />
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle>Thông tin APK hiện tại</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Tên file:</p>
                  <p className="font-medium">pis-app.apk</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phiên bản:</p>
                  <p className="font-medium">1.0.0</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Kích thước:</p>
                  <p className="font-medium">15MB</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Ngày tải lên:</p>
                  <p className="font-medium">18/03/2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lượt tải xuống:</p>
                  <p className="font-medium">0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

