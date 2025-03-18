import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("apk") as File

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
    }

    // Kiểm tra xem file có phải là APK không
    if (!file.name.endsWith(".apk")) {
      return NextResponse.json({ error: "Invalid file type. Only APK files are allowed." }, { status: 400 })
    }

    // Đọc nội dung file
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Đảm bảo thư mục tồn tại
    const apkDir = path.join(process.cwd(), "public", "apk")

    // Lưu file vào thư mục public/apk
    const filePath = path.join(apkDir, "pis-app.apk")
    await writeFile(filePath, buffer)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error uploading APK:", error)
    return NextResponse.json({ error: "Failed to upload APK" }, { status: 500 })
  }
}

