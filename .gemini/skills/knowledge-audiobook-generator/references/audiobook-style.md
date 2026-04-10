# Audiobook Style Guide for DSA (Pure Text Edition)

## ElevenLabs-Friendly Narration

- **No Markdown Symbols:** NEVER include #, *, -, _, [, ], or any other formatting characters.
- **Sentence Length:** Use shorter, punchy sentences for clarity. ElevenLabs performs best with clear sentence boundaries.
- **Punctuation as Pausing:** Use ellipses (...) for a thoughtful pause and commas for natural breathing points.
- **Avoid Special Characters:** Don't use characters like { } [ ] ( ) in the script. They confuse the AI. Spell out terms like "low pointer" instead of `low_ptr`.

## Narrating Code Logic

- **Focus on Action:** Describe the *intent* of the code.
- **Example:**
  - *Syntax:* `if (item === list[mid])`
  - *Narration:* "At this point, we check if the item we're looking for is right in the middle of our list."
- **Variable Names:** Speak naturally. Instead of "item underscore found," say "the item we found."

## Tone and Engagement

- **Conversational Peer:** Sound like a senior engineer explaining a concept to a friend.
- **Pacing:** Introduce a concept, provide a real-world analogy (from the notes), and then walk through the logic.
- **No Headers in Script:** Do not include section titles like "Introduction" or "Conclusion" in the output text unless you want the AI to speak them.
