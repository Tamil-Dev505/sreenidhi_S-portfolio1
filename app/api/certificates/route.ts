import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const certificatesDir = path.join(process.cwd(), "public", "certificates");
    if (!fs.existsSync(certificatesDir)) {
      return NextResponse.json([]);
    }

    const files = fs.readdirSync(certificatesDir);
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".svg"];
    
    // Sort files to keep order consistent
    const certificateFiles = files
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext) && !file.startsWith("cert-");
      })
      .sort((a, b) => a.localeCompare(b));

    return NextResponse.json(certificateFiles);
  } catch (error) {
    console.error("Error reading certificates directory:", error);
    return NextResponse.json([], { status: 500 });
  }
}
