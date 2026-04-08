import fs from "fs";
import { generateElevenLabsAudio } from "./tts/elevenlabs.js";
import { generateGoogleAudio } from "./tts/google.js";

async function main() {
  const filePath = process.argv[2];
  const provider = process.argv[3] || "elevenlabs"; // Default to elevenlabs

  if (!filePath) {
    console.log("Usage: node generate_audio.js <path_to_txt_file> [provider (elevenlabs|google)]");
    process.exit(1);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
  }

  try {
    const text = fs.readFileSync(filePath, "utf-8");
    const outputFilename = filePath.replace(/\.txt$/, ".mp3");

    console.log(`Generating audio using ${provider} for: ${filePath}...`);

    let audioStream;
    if (provider === "elevenlabs") {
      audioStream = await generateElevenLabsAudio(text);
    } else if (provider === "google") {
      audioStream = await generateGoogleAudio(text);
    } else {
      console.error(`Error: Unsupported provider: ${provider}`);
      process.exit(1);
    }

    const fileStream = fs.createWriteStream(outputFilename);
    
    audioStream.pipe(fileStream);

    fileStream.on("finish", () => {
      console.log(`✅ Success! Audio saved to: ${outputFilename}`);
    });

    fileStream.on("error", (err) => {
      console.error("Error writing file:", err);
    });

  } catch (error) {
    console.error("Error generating speech:", error.message || error);
  }
}

main();
