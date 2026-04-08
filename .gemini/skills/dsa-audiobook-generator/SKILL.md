---
name: dsa-audiobook-generator
description: Generates high-quality, audiobook-style scripts for Data Structures and Algorithms chapters, optimized for ElevenLabs. Synthesizes Markdown notes and JavaScript implementations into conversational, logic-driven narratives.
---

# DSA Audiobook Generator

Transform technical DSA notes and code implementations into engaging audiobook scripts.

## Workflow

1.  **Identify the Chapter:** Locate the target chapter folder (e.g., `chapter_1/`).
2.  **Gather Context:**
    *   Read all `.md` files in the folder (e.g., `binary_search.md`) to capture the theoretical core.
    *   Read all `.js` files in the folder (e.g., `binary_search.js`) to capture the logic of the implementation.
3.  **Synthesize Content:** Combine the notes and code logic into a single narrative using the [script template](assets/script-template.md).
4. **Refine for Audio:** Apply [audio-first rewriting logic](references/audiobook-style.md) to ensure the text is conversational, suitable for ElevenLabs, and contains **no Markdown symbols** (#, *, -, etc.).
5. **Output:** Save the result as a `.txt` file (e.g., `chapter_1_audio_script.txt`).

## Narration Strategy

*   **Logic over Syntax:** Never read code characters (e.g., "let i equals zero"). Instead, describe the *action* (e.g., "We initialize our pointer at the start of the list").
*   **Pure Text Only:** Do not include Markdown formatting. Use plain text and punctuation (periods, commas, ellipses) only.
*   **Conversational Flow:** Use transitions like "Now, let's look at how this works in practice" or "Imagine you're searching for a name in a phone book."
*   **Expand Use Cases:** Always include at least two additional real-world use cases for the algorithm or data structure being discussed, beyond what is found in the source notes. Briefly explain how it's applied in those contexts using the same conversational style.
*   **Structure:** Follow the standard Intro -> Concept -> Implementation Walkthrough -> Real-world Use Cases -> Outro format.

## Related Resources

- [Audiobook Style Guide](references/audiobook-style.md): Detailed tips for ElevenLabs-friendly narration.
- [Script Template](assets/script-template.md): The standard structure for audiobook scripts.
