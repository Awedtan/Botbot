const { prefix } = require("./../config.json");
const config = require("./../config.json");
const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const search = require("youtube-search");

module.exports = {
	name: `${prefix}play`,
	description: ``,

	async execute(message, client) {
		const voiceChannel = message.member.voice.channel;
		const permissions = voiceChannel.permissionsFor(message.client.user);

		if(!voiceChannel)
			return message.channel.send(
				"You need to be in a voice channel to play music!"
			);
		if(!permissions.has("CONNECT") || !permissions.has("SPEAK")){
			return message.channel.send(
				"I need the permissions to join and speak in your voice channel!"
			);
		}

		const args = message.content.split(" ");
		const queue = message.client.queue;
		const serverQueue = message.client.queue.get(message.guild.id);
		const validLink = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;

		try{
			if(args.length <= 1){
				console.log("Play failed (empty query)");
				return message.channel.send(
					":x: You didn't specify any search terms"
				);
			}

			if(validLink.test(args[1])){
				const songInfo = await ytdl.getInfo(args[1]);
				const song = {
					title: songInfo.title,
					url: songInfo.video_url
				};

				if(!serverQueue){
					const queueContruct = {
						textChannel: message.channel,
						voiceChannel: voiceChannel,
						connection: null,
						songs: [],
						volume: 4,
						playing: true
					};

					queue.set(message.guild.id, queueContruct);
					queueContruct.songs.push(song);
					
					var connection = await voiceChannel.join();
					queueContruct.connection = connection;
					this.play(message.guild, queueContruct.songs[0], queue, client);
					clientVoiceChannel = voiceChannel;
				}
				else{
					serverQueue.songs.push(song);
					console.log(`Queued ${song.title}`);
					return message.channel.send(
						`:+1: **${song.title}** was added to the queue`
					);
				}
			}
			else{
				var query = args[1];
				for (let i = 2; i < args.length; i++) {
					query += args[i] + " ";
				}
				let results = await search(query, client.opts);
				let searches = results.results;
				let index = 0;
				let titles = searches.map(result => {
					index++;
					return index + ") " + result.title;
				});
				console.log(titles);
				let selected = searches[0];

				try{
					embed = new Discord.MessageEmbed()
						.setTitle(`${selected.title}`)
						.setURL(`${selected.link}`)
						.setThumbnail(`${selected.thumbnails.default.url}`);
				} catch(err){
					console.log("No results found");
					return message.channel.send(
						`:pensive: No results were found, please double check your spelling :triumph:`
					);
				}
				message.channel.send(embed);

				const songInfo = await ytdl.getInfo(`${selected.link}`);
				const song = {
					title: songInfo.title,
					url: songInfo.video_url
				};

				if(!serverQueue){
					const queueContruct = {
						textChannel: message.channel,
						voiceChannel: voiceChannel,
						connection: null,
						songs: [],
						volume: 5,
						playing: true
					};

					queue.set(message.guild.id, queueContruct);
					queueContruct.songs.push(song);
					
					var connection = await voiceChannel.join();
					queueContruct.connection = connection;
					this.play(message.guild, queueContruct.songs[0], queue, client);
					clientVoiceChannel = voiceChannel;
				}
				else{
					serverQueue.songs.push(song);
					console.log(`Queued ${song.title}`);
					return message.channel.send(
						`:+1: **${song.title}** was added to the queue`
					);
				}
			}
		} catch(err){
			console.log(err);
			return message.channel.send(
				":pensive: Sorry, something went wrong"
			);
		}
	},

	play(guild, song, queue, client) {
		if(!song) return;
		
		try{
			const serverQueue = queue.get(guild.id);
			const dispatcher = serverQueue.connection
				.play(ytdl(song.url))
				.on("finish", () => {
					serverQueue.songs.shift();
					this.play(guild, serverQueue.songs[0], queue, client);
				})
				.on("error", error => console.error(error));

			dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
			isInChannel = true;
			console.log(`Now playing ${song.title}`);
			serverQueue.textChannel.send(
				`:arrow_forward: Now playing \`${song.title}\``
			);
		} catch(err){
			client.opts.key = config.backup_api;
			console.log("Now using backup api");
			execute(message, serverQueue);
		}
	}
};