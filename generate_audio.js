import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import fs from "fs";
import { Readable } from "stream";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) {
  console.error("Error: ELEVENLABS_API_KEY is not defined in your .env file.");
  process.exit(1);
}

const client = new ElevenLabsClient({
  apiKey: API_KEY,
});

async function main() {
  const filePath = process.argv[2];

  if (!filePath) {
    console.log("Usage: node generate_audio.js <path_to_txt_file>");
    process.exit(1);
  }

  if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
  }

  try {
    const text = fs.readFileSync(filePath, "utf-8");
    const outputFilename = filePath.replace(/\.txt$/, ".mp3");

    console.log(`Generating audio for: ${filePath}...`);

    const audioStream = await client.textToSpeech.convert("pNInz6obpgDQGcFmaJgB", {
      text: text,
      model_id: "eleven_flash_v2_5",
      output_format: "mp3_44100_128",
    });

    const fileStream = fs.createWriteStream(outputFilename);
    
    // The SDK returns a Web ReadableStream. We convert it to a Node.js Readable stream.
    Readable.fromWeb(audioStream).pipe(fileStream);

    fileStream.on("finish", () => {
      console.log(`✅ Success! Audio saved to: ${outputFilename}`);
    });

    fileStream.on("error", (err) => {
      console.error("Error writing file:", err);
    });

  } catch (error) {
    console.error("Error generating speech:", error);
  }
}

main();
