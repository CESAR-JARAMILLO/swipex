import AppKit
import Foundation

let srcPath = CommandLine.arguments[1]
let destPath = CommandLine.arguments[2]
let src = URL(fileURLWithPath: srcPath)
let dest = URL(fileURLWithPath: destPath)

guard let img = NSImage(contentsOf: src),
      let tiff = img.tiffRepresentation,
      let rep = NSBitmapImageRep(data: tiff) else {
  fputs("Failed to load image\n", stderr)
  exit(1)
}

let w = rep.pixelsWide
let h = rep.pixelsHigh
guard let out = NSBitmapImageRep(
  bitmapDataPlanes: nil,
  pixelsWide: w,
  pixelsHigh: h,
  bitsPerSample: 8,
  samplesPerPixel: 4,
  hasAlpha: true,
  isPlanar: false,
  colorSpaceName: .deviceRGB,
  bytesPerRow: w * 4,
  bitsPerPixel: 32
) else {
  fputs("Failed to create bitmap\n", stderr)
  exit(1)
}

// Faster path via raw bitmap if available
if let data = rep.bitmapData, rep.bitsPerPixel >= 24 {
  let spp = rep.samplesPerPixel
  let bpp = rep.bitsPerPixel / 8
  let row = rep.bytesPerRow
  let outData = out.bitmapData!
  let outRow = out.bytesPerRow
  for y in 0..<h {
    for x in 0..<w {
      let i = y * row + x * bpp
      let r = Int(data[i])
      let g = Int(data[i + 1])
      let b = Int(data[i + 2])
      let o = y * outRow + x * 4
      outData[o] = data[i]
      outData[o + 1] = data[i + 1]
      outData[o + 2] = data[i + 2]
      // Knock out near-black background
      outData[o + 3] = (r < 22 && g < 22 && b < 22) ? 0 : 255
    }
  }
} else {
  for y in 0..<h {
    for x in 0..<w {
      guard let c = rep.colorAt(x: x, y: y) else { continue }
      var r: CGFloat = 0, g: CGFloat = 0, b: CGFloat = 0, a: CGFloat = 0
      c.usingColorSpace(.deviceRGB)?.getRed(&r, green: &g, blue: &b, alpha: &a)
      let R = Int(r * 255), G = Int(g * 255), B = Int(b * 255)
      let alpha: CGFloat = (R < 22 && G < 22 && B < 22) ? 0 : 1
      out.setColor(NSColor(calibratedRed: r, green: g, blue: b, alpha: alpha), atX: x, y: y)
    }
  }
}

guard let png = out.representation(using: .png, properties: [:]) else {
  fputs("Failed to encode PNG\n", stderr)
  exit(2)
}
try png.write(to: dest)
print("wrote \(destPath) (\(png.count) bytes) \(w)x\(h)")
