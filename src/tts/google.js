import textToSpeech from "@google-cloud/text-to-speech";
import { Readable } from "stream";
import dotenv from "dotenv";

dotenv.config();

export async function generateGoogleAudio(text, voiceName = "en-US-Journey-F") {
  const client = new textToSpeech.TextToSpeechClient({
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const request = {
    input: { text: text },
    voice: { languageCode: "en-US", name: voiceName },
    audioConfig: { audioEncoding: "MP3" },
  };

  const [response] = await client.synthesizeSpeech(request);

  if (!response.audioContent) {
    throw new Error("No audio content returned from Google Cloud TTS.");
  }

  return Readable.from(response.audioContent);
}
