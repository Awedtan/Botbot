const { prefix } = require("./../config.json");
const config = require("./../config.json");
const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const search = require("youtube-search");

module.exports = {
	name: `${prefix}search`,
	description: ``,
	
	async execute(message, client){
		const voiceChannel = message.member.voice.channel;
		const permissions = voiceChannel.permissionsFor(message.client.user);

		if(!voiceChannel){
			return message.channel.send(
				"You need to be in a voice channel to play music!"
			);
		}
		if(!permissions.has("CONNECT") || !permissions.has("SPEAK")){
			return message.channel.send(
				"I need the permissions to join and speak in your voice channel!"
			);
		}
		
		const args = message.content.split(" ");
		const queue = message.client.queue;
		const serverQueue = message.client.queue.get(message.guild.id);
		var query = args[1];
		
		try{
			if(args.length <= 1){
				console.log("Search failed (empty query)");
				return message.channel.send(
					":x: You didn't specify any search terms"
				);
			}
			
			for(let i=2; i<args.length; i++){
				query += args[i] + " ";
			}
			
			let results = await search(query, client.opts);
			let searches = results.results;
			let i = 0;
			let titles = searches.map(result => {
				i++;
				return i + ") " + result.title;
			});
			
			let embed = new Discord.MessageEmbed();
			message.channel.send({
				embed: {
					title: "Select which song you'd like by typing its number (0 to cancel)",
					description : titles.join("\n")
				}
			}).catch(err => console.log(err));
			
			let filter = m => (m.author.id === message.author.id) && (m.content >= 0) && (m.content <= searches.length);
			let collected = await message.channel.awaitMessages(filter, { max: 1, time: 30000 });
			if(collected.first().content == 0){
				console.log("Search has been cancelled");
				return message.channel.send(
				":crab: Search is cancelled :crab:"
				);
			}
			console.log(titles);
			let selected = searches[collected.first().content - 1];
			
			embed = new Discord.MessageEmbed()
				.setTitle(`${selected.title}`)
				.setURL(`${selected.link}`)
				.setThumbnail(`${selected.thumbnails.default.url}`);
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
					volume: 4,
					playing: true
				};

				queue.set(message.guild.id, queueContruct);
				queueContruct.songs.push(song);

				try{
					var connection = await voiceChannel.join();
					queueContruct.connection = connection;
					this.play(message.guild, queueContruct.songs[0], queue, client);
				} catch(err){
					console.log(err);
					return message.channel.send(err);
				}
			}
			else{
				serverQueue.songs.push(song);
				console.log(`Queued ${song.title}`);
				return message.channel.send(
					`:+1: **${song.title}** was added to the queue`
				);
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