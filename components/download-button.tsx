"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  className?: string;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "secondary";
  children: React.ReactNode;
}

export default function DownloadButton({
  className,
  size = "default",
  variant = "default",
  children,
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);

      window.location.href =
        "https://github.com/NVNnguyen/pis-download-web/releases/download/v1.0.0/application-de0448c1-1ab7-4ed7-b4a9-cb46f084385b.apk";

      // Đặt timeout để reset trạng thái sau khi đã chuyển hướng
      setTimeout(() => {
        setIsDownloading(false);
      }, 3000);
    } catch (error) {
      console.error("Error downloading APK:", error);
      alert("Failed to download APK. Please try again later.");
      setIsDownloading(false);
    }
  };

  return (
    <Button
      className={className}
      size={size}
      variant={variant}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <>Downloading...</>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" /> {children}
        </>
      )}
    </Button>
  );
}
