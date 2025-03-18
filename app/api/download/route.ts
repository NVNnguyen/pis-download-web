import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    // Đường dẫn đến file APK trong thư mục public
    const filePath = path.join(process.cwd(), "public", "apk", "pis-app.apk")

    // Đọc file APK
    const fileBuffer = fs.readFileSync(filePath)

    // Tạo response với file APK
    const response = new NextResponse(fileBuffer)

    // Thiết lập headers
    response.headers.set("Content-Type", "application/vnd.android.package-archive")
    response.headers.set("Content-Disposition", 'attachment; filename="pis-app.apk"')

    return response
  } catch (error) {
    console.error("Error serving APK file:", error)
    return new NextResponse("File not found", { status: 404 })
  }
}

