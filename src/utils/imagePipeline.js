import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const sizes = {
  product: 800,
  thumbnail: 300,
  banner: 1920,
};

export async function convertImageToWebP({ inputPath, outputDir, outputName, type, occasion, city }) {
  const width = sizes[type] || sizes.product;
  const altText = `King Baker's ${outputName} ${occasion || "gift"} ${city || "Muzaffarnagar"}`;
  const fileName = `king-gifts-${outputName.replace(/\s+/g, "-").toLowerCase()}-${city?.replace(/\s+/g, "-").toLowerCase()}.webp`;
  const outputPath = path.join(outputDir, fileName);

  await fs.mkdir(outputDir, { recursive: true });
  await sharp(inputPath)
    .resize(width, width, { fit: "cover" })
    .webp({ quality: 85, effort: 6 })
    .withMetadata()
    .toFile(outputPath);

  return {
    path: outputPath,
    altText,
    fileName,
  };
}

export async function generateProductImages(inputPath, productName, occasion, city) {
  const outputDir = path.resolve(process.cwd(), "public", "uploads");
  return {
    product: await convertImageToWebP({ inputPath, outputDir, outputName: productName, type: "product", occasion, city }),
    thumbnail: await convertImageToWebP({ inputPath, outputDir, outputName: productName, type: "thumbnail", occasion, city }),
    banner: await convertImageToWebP({ inputPath, outputDir, outputName: productName, type: "banner", occasion, city }),
  };
}
