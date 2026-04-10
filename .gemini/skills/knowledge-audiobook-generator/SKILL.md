---
name: knowledge-audiobook-generator
description: Generates high-quality, audiobook-style scripts for any technical or educational folder, optimized for ElevenLabs. Synthesizes Markdown notes and code implementations into conversational, logic-driven narratives.
---

# Knowledge Audiobook Generator

Transform technical notes, research, and code implementations from any folder into engaging audiobook scripts.

## Workflow

1.  **Identify the Target Folder:** Locate the folder containing the source material (e.g., `chapter_1/`, `machine_learning/`, `personal_finance/`).
2.  **Gather Context:**
    *   Read all `.md` files in the folder to capture the theoretical core and key concepts.
    *   Read all relevant code files (e.g., `.js`, `.py`, `.sql`) to capture the logic of implementations or examples.
3.  **Synthesize Content:** Combine the notes and logic into a single narrative using the [script template](assets/script-template.md).
4. **Refine for Audio:** Apply [audio-first rewriting logic](references/audiobook-style.md) to ensure the text is conversational, suitable for ElevenLabs, and contains **no Markdown symbols** (#, *, -, etc.).
5. **Output:** 
    * Save the result as a `.txt` script inside the target folder (e.g., `machine_learning/audio_script.txt`).
    * Use the `src/generate_audio.js` script to generate the audio file.
    * Example: `node src/generate_audio.js machine_learning/audio_script.txt`
    * The audio will be automatically saved to `audios/input/` for merging.

## Narration Strategy

*   **Logic over Syntax:** Never read code characters or raw data. Instead, describe the *action*, the *intent*, or the *insight* behind the information.
*   **Pure Text Only:** Do not include Markdown formatting. Use plain text and punctuation (periods, commas, ellipses) only.
*   **Conversational Flow:** Use transitions like "Now, let's look at how this works in practice" or "Imagine you're dealing with..." to keep the listener engaged.
*   **Expand Use Cases:** Always include at least two additional real-world applications or analogies for the topic being discussed, ensuring they fit the conversational style.
*   **Structure:** Follow the standard Intro -> Concept -> Implementation/Deep Dive -> Real-world Applications -> Outro format.

## Related Resources

- [Audiobook Style Guide](references/audiobook-style.md): Detailed tips for ElevenLabs-friendly narration.
- [Script Template](assets/script-template.md): The standard structure for audiobook scripts.
