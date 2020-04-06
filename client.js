const { Client, Collection } = require('discord.js');

module.exports = class extends Client {
	constructor(config) {
		super({
			disableEveryone: true,
			disabledEvents: ['TYPING_START'],
		});
		
		this.config = config;
		this.commands = new Collection();
		this.queue = new Map();
		this.opts = {
			maxResults: 10,
			key: "",
			type : "video"
		};
	}
};