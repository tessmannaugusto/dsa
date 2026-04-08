import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import { Readable } from "stream";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.ELEVENLABS_API_KEY;

export async function generateElevenLabsAudio(text, voiceId = "pNInz6obpgDQGcFmaJgB") {
  if (!API_KEY) {
    throw new Error("ELEVENLABS_API_KEY is not defined in your .env file.");
  }

  const client = new ElevenLabsClient({
    apiKey: API_KEY,
  });

  const audioStream = await client.textToSpeech.convert(voiceId, {
    text: text,
    model_id: "eleven_flash_v2_5",
    output_format: "mp3_44100_128",
  });

  return Readable.fromWeb(audioStream);
}
