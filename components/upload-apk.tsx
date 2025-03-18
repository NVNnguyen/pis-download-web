"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Check, AlertCircle } from "lucide-react"

export default function UploadAPK() {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Kiểm tra xem file có phải là APK không
    if (!file.name.endsWith(".apk")) {
      setUploadStatus("error")
      setStatusMessage("Vui lòng chọn file APK hợp lệ")
      return
    }

    setIsUploading(true)
    setUploadStatus("idle")
    setStatusMessage("")

    try {
      // Tạo FormData để gửi file
      const formData = new FormData()
      formData.append("apk", file)

      // Gửi file lên server
      const response = await fetch("/api/upload-apk", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      setUploadStatus("success")
      setStatusMessage("File APK đã được tải lên thành công!")
    } catch (error) {
      console.error("Error uploading APK:", error)
      setUploadStatus("error")
      setStatusMessage("Không thể tải lên file APK. Vui lòng thử lại sau.")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle>Tải lên file APK</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4">
          <div
            className="border-2 border-dashed border-gray-700 rounded-lg p-8 w-full text-center cursor-pointer hover:border-gray-500 transition"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-10 w-10 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-400">Nhấp để chọn file APK hoặc kéo thả file vào đây</p>
            <p className="text-xs text-gray-500 mt-2">Chỉ chấp nhận file .apk</p>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".apk"
              onChange={handleUpload}
              disabled={isUploading}
            />
          </div>

          {isUploading && (
            <div className="flex items-center gap-2 text-gray-400">
              <div className="animate-spin h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full"></div>
              <span>Đang tải lên...</span>
            </div>
          )}

          {uploadStatus === "success" && (
            <div className="flex items-center gap-2 text-green-500">
              <Check className="h-5 w-5" />
              <span>{statusMessage}</span>
            </div>
          )}

          {uploadStatus === "error" && (
            <div className="flex items-center gap-2 text-red-500">
              <AlertCircle className="h-5 w-5" />
              <span>{statusMessage}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

