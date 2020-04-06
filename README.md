# Botbot

A 100% original discord.js bot

Has ~~music playing~~ and text-to-speech commands

Note: since adding speak the music queue is broken, I'll fix it soon

The bot is not intended for use in multiple servers (I don't really want to work on this)

# Installation

### Requirements

- node.js
- npm
- ffmpeg

### Installing npm packages

- discord.js
- ffmpeg (requires ffmpeg to already be installed)
- fluent-ffmpeg
- opus
- say
- ytdl-core
- youtube-search

Navigate to the bot folder in command prompt and paste this:

`npm install discord.js ffmpeg fluent-ffmpeg @discordjs/opus say ytdl-core youtube-search --save`

### TTS voices

Depending on your OS, the voices you have available and the way you add them will be different (see https://www.npmjs.com/package/say). 

On windows 10, voices are added through Settings > Time & Language > Speech > Manage voices

The list of voices available for use will be printed to the console on startup

### Config

You will need your own discord bot token and youtube api
