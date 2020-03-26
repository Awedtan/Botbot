const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const config = require("./config.json");
const ytdl = require("ytdl-core");
const search = require("youtube-search");
const client = new Discord.Client();
const queue = new Map();

const opts = {
	maxResults: 10,
	key: config.youtube_api,
	type : 'video'
};

client.once("ready", () => {
	console.log("Ready!");
});

client.once("reconnecting", () => {
	console.log("Reconnecting!");
});

client.once("disconnect", () => {
	console.log("Disconnect!");
});

client.on("message", async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const serverQueue = queue.get(message.guild.id);
	console.log();
	console.log("Received: " + message.content);
	
	if (message.content.startsWith(`${prefix}play`)) {
		execute(message, serverQueue);
		return;
	} else if (message.content.match(`${prefix}skip`)) {
		skip(message, serverQueue);
		return;
	} else if (message.content.match(`${prefix}stop`) || message.content.match(`${prefix}leave`)) {
		stop(message, serverQueue);
		return;
	} else if (message.content.startsWith(`${prefix}remove`)) {
		remove(message, serverQueue);
		return;
	} else if (message.content.match(`${prefix}list`) || message.content.match(`${prefix}queue`)) {
		list(message, serverQueue);
		return;
	} else if (message.content.match(`${prefix}help`)) {
		message.channel.send(
			`\`\`\`play [URL/search query]- Plays the specified song\nsearch - Searches for the top 5 Youtube results\nskip - Skips the next queued up song\nstop - Disconnects the bot and clears the queue\nremove [position] - Removes the song in the selected position from the queue\nqueue - Displays the currently playing song and any queued songs\nhelp - Displays this message again\`\`\``
		);
		return;
	} else if (message.content.startsWith(`${prefix}search`) || message.content.startsWith(`${prefix}find`)) {
		find(message, serverQueue);
		return;
	} else {
		console.log("Failed command");
		return message.channel.send(
			":grey_question: Did you type that correctly?"
		);
	}
});

async function execute(message, serverQueue) {
	
	const args = message.content.split(" ");
	const voiceChannel = message.member.voice.channel;
	if (!voiceChannel){
		console.log("Play failed (not in channel)");
		return message.channel.send(
			":x: You have to be in a voice channel"
		);
	}
		
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
		console.log("Play failed (permissions denied)");
		return message.channel.send(
			":x: You have to be in a voice channel that I have permissions for"
		);
	}
	
	const validLink = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
	if (validLink.test(args[1])){
		const songInfo = await ytdl.getInfo(args[1]);
		const song = {
			title: songInfo.title,
			url: songInfo.video_url
		};

		if (!serverQueue) {
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

			try {
				var connection = await voiceChannel.join();
				queueContruct.connection = connection;
				play(message.guild, queueContruct.songs[0]);
			} catch (err) {
				console.log(err);
				queue.delete(message.guild.id);
				return message.channel.send(err);
			}
		} else {
			serverQueue.songs.push(song);
			console.log(`Queued ${song.title}`);
			return message.channel.send(
				`:+1: **${song.title}** was added to the queue`
			);
		}
	} else {
		var query = args[1];
		for(var i=2; i<args.length; i++)
			query += args[i] + " ";
			
		let results = await search(query, opts);
		if(results){
			let searches = results.results;
			let i = 0;
			let titles = searches.map(result => {
				i++;
				return i + ") " + result.title;
			});
			console.log(titles);
			let selected = searches[0];
			embed = new Discord.MessageEmbed()
				.setTitle(`${selected.title}`)
				.setURL(`${selected.link}`)
				.setThumbnail(`${selected.thumbnails.default.url}`);
				message.channel.send(embed);
				
				if (validLink.test(`${selected.link}`)){
					const songInfo = await ytdl.getInfo(`${selected.link}`);
					const song = {
						title: songInfo.title,
						url: songInfo.video_url
					};
			
					if (!serverQueue) {
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
			
						try {
							var connection = await voiceChannel.join();
							queueContruct.connection = connection;
							play(message.guild, queueContruct.songs[0]);
						} catch (err) {
							console.log(err);
							queue.delete(message.guild.id);
							return message.channel.send(err);
						}
					} else {
						serverQueue.songs.push(song);
						console.log(`Queued ${song.title}`);
						return message.channel.send(
							`:+1: **${song.title}** was added to the queue`
						);
					}
				} else {
					return message.channel.send(
						":blobsad: Sorry, something went wrong"
					);
				}
		} else {
			return message.channel.send(
				":blobsad: Sorry, something went wrong"
			);
		}
		
		// console.log(`Failed play`);
		// return message.channel.send(
		// 	":x: I'm afraid I can't play that"
		// );
	}
}

async function find(message, serverQueue) {
	const args = message.content.split(" ");
	const voiceChannel = message.member.voice.channel;
	const validLink = /(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
	
	var query = args[1];
	for(var i=2; i<args.length; i++)
		query += args[i];
		
	let results = await search(query, opts);
	if(results){
		let searches = results.results;
		let i = 0;
		let titles = searches.map(result => {
			i++;
			return i + ") " + result.title;
		});
		let embed = new Discord.MessageEmbed();
		message.channel.send({
			embed: {
				title: "Select which song you'd like by typing its number",
				description : titles.join("\n")
			}
		}).catch(err => console.log(err));
		
		let filter = m => (m.author.id === message.author.id) && (m.content >= 1) && (m.content <= searches.length);
		let collected = await message.channel.awaitMessages(filter, { max: 1, time: 30000 });
		let selected = searches[collected.first().content - 1];
		
		embed = new Discord.MessageEmbed()
			.setTitle(`${selected.title}`)
			.setURL(`${selected.link}`)
			.setThumbnail(`${selected.thumbnails.default.url}`);
		message.channel.send(embed);
		if (validLink.test(`${selected.link}`)){
			const songInfo = await ytdl.getInfo(`${selected.link}`);
			const song = {
				title: songInfo.title,
				url: songInfo.video_url
			};
	
			if (!serverQueue) {
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
	
				try {
					var connection = await voiceChannel.join();
					queueContruct.connection = connection;
					play(message.guild, queueContruct.songs[0]);
				} catch (err) {
					console.log(err);
					queue.delete(message.guild.id);
					return message.channel.send(err);
				}
			} else {
				serverQueue.songs.push(song);
				console.log(`Queued ${song.title}`);
				return message.channel.send(
					`:+1: **${song.title}** was added to the queue`
				);
			}
		} else {
			return message.channel.send(
				":blobsad: Sorry, something went wrong"
			);
		}
	} else {
		return message.channel.send(
			":blobsad: Sorry, something went wrong"
		);
	}
}

function skip(message, serverQueue) {
	if (!message.member.voice.channel){
		console.log("Skip failed (not in channel)");
		return message.channel.send(
			":x: You aren't in a voice channel"
		);
	} else if (!serverQueue){
		console.log("Skip failed (empty queue)");
		return message.channel.send(
			":x: There aren't any songs queued up"
		);
	}
	message.channel.send(
		`:next_track: Skipped current song`
	);
	console.log("Skipped current song");
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voice.channel){
		console.log("Stop failed (not in channel)");
		return message.channel.send(
			":x: You aren't in a voice channel"
		);
	}
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
	console.log("Stopped music playback");
	message.channel.send(
		":stop_button: Stopped music playback"
	);
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);
	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection
		.play(ytdl(song.url))
		.on("finish", () => {
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on("error", error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	console.log(`Now playing ${song.title}`);
	serverQueue.textChannel.send(
		`:arrow_forward: Now playing **${song.title}**`
	);
}

function remove(message, serverQueue) {
	const args = message.content.split(" ");
	var tempArr = [];
	
	if (!message.member.voice.channel){
		console.log("Remove failed (not in channel)");
		return message.channel.send(
			":x: You aren't in a voice channel"
		);
	}
	if(args[1] <= serverQueue.songs.length-1 && args[1] > 0){
		for(var i=0; i<serverQueue.songs.length; i++){
			if(i != args[1]){
				tempArr.push(serverQueue.songs[i]);
			} else {
				serverQueue.textChannel.send(
					`:eject: Removed **${serverQueue.songs[i].title}** from queue`
				);
				console.log(`Removed ${serverQueue.songs[i].title} from queue`);
			}
		}
		serverQueue.songs = [...tempArr];
	} else {
		console.log("Remove failed (invalid queue number)");
		serverQueue.textChannel.send(
			":x: Invalid queue number"
		);
	}
}

function list(message, serverQueue) {
	if (!message.member.voice.channel){
		console.log("List failed (not in channel)");
		return message.channel.send(
			":x: You aren't in a voice channel"
		);
	}
	if (!serverQueue){
		console.log("List failed (empty queue)");
		return message.channel.send(
			":x: There arent any songs queued up"
		);
	}
	var queueMessage = `:arrow_forward: Now playing - **${serverQueue.songs[0].title}**\n`;
	for(var i=1; i<serverQueue.songs.length; i++) {
		queueMessage += `:hash: ${i} - **${serverQueue.songs[i].title}**\n`;
	}
	serverQueue.textChannel.send(
		queueMessage
	);
	console.log(`Displayed ${serverQueue.songs.length} songs currently playing or in queue`);
}

client.login(token);