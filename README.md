# VoiceUnlock

This project allows you to enable ChatGPT's voice functionality on your iOS device using Quantumult X by subscribing to a predefined set of rewrite rules. This project is inspired by a Reddit forum post (<https://www.reddit.com/r/ChatGPT/comments/16xboam/working_tutorial_on_how_to_enable_ios_voice_chat/>) with credit to BackwardsBinary.

## Prerequisites

Before you get started, make sure you have the following:

- A ChatGPT Plus subscription.
- An iOS device with Quantumult X installed.
- Quantumult X with MITM (Man-in-the-Middle) enabled, and the necessary certificates trusted.

## Instructions

1. Open Quantumult X.
2. Go to the "Settings" page and tap on "Resources" in "Rewrite" section.
3. Tap the add link button on the top right
4. In the "URL" field, paste the following subscription link(https://raw.githubusercontent.com/ygowill/VoiceUnlock/main/rule.conf) and save
5. Go back to settings page and tap the "Rewrite Rule" button and update rules
6. Force quit chatgpt app and reopen it. Now you should be able to see Voice Conversations switch in Settings -> New Features

## Disclaimer

This project is provided for educational and experimental purposes only. Use it responsibly and in compliance with OpenAI's terms of service.

## Credits

BackwardsBinary for the original inspiration and Reddit post.

## License

This project is licensed under the MIT License.
