"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface DownloadButtonProps {
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline" | "secondary"
  children: React.ReactNode
}

export default function DownloadButton({
  className,
  size = "default",
  variant = "default",
  children,
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsDownloading(true)

      // Sử dụng link Google Drive trực tiếp
      // Link tải xuống trực tiếp từ Google Drive
      window.location.href = "https://drive.google.com/uc?export=download&id=11Hx3DaHecO_SwGK9--JspEj-P4pMnwh1"

      // Đặt timeout để reset trạng thái sau khi đã chuyển hướng
      setTimeout(() => {
        setIsDownloading(false)
      }, 3000)
    } catch (error) {
      console.error("Error downloading APK:", error)
      alert("Failed to download APK. Please try again later.")
      setIsDownloading(false)
    }
  }

  return (
    <Button className={className} size={size} variant={variant} onClick={handleDownload} disabled={isDownloading}>
      {isDownloading ? (
        <>Downloading...</>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" /> {children}
        </>
      )}
    </Button>
  )
}

