const { prefix } = require("./../config.json");
const Discord = require("discord.js");

module.exports = {
	name: `${prefix}help`,
	description: ``,
	
	execute(message, client){
		const args = message.content.split(" ");
		if(args.length <= 1){
			embed = new Discord.MessageEmbed()
				.setTitle(`Help Menu`)
				.setDescription(
					`Current prefix: \`${prefix}\`\n\n` +
					`Music\n` +
					`\`play\`, \`search\`, \`skip\`, \`stop\`, \`leave\`, \`remove\`, \`queue\`\n\n` +
					// `Misc\n` +
					// `\`FLIP\`\N\N` +
					`Use \`help [command]\` for more information about a command`
				)
			return message.channel.send(embed);
		}
		else if(args.length == 2){
			if(args[1] === "play"){
				return message.channel.send(
					`\`play [search query/youtube url]\`: plays/enqueues a song`
				);
			}
			else if(args[1] === "search"){
				return message.channel.send(
					`\`search [search query]\`: lists the first ten search results`
				);
			}
			else if(args[1] === "skip"){
				return message.channel.send(
					`\`skip\`: skips the current song`
				);
			}
			else if(args[1] === "stop"){
				return message.channel.send(
					`\`stop\`: removes all songs from the queue`
				);
			}
			else if(args[1] === "leave"){
				return message.channel.send(
					`\`leave\`: leaves the current voice channel`
				);
			}
			else if(args[1] === "remove"){
				return message.channel.send(
					`\`remove [position]\`: removes the song from the queue`
				);
			}
			else if(args[1] === "queue"){
				return message.channel.send(
					`\`queue\`: displays the current song and any enqueued songs`
				);
			}
			else if(args[1] === "flip"){
				return message.channel.send(
					`\`flip\`: returns either heads or tails`
				);
			}
			else{
				console.log("Help failed");
				return message.channel.send(
					":grey_question: Did you type that correctly?"
				);
			}
		}
		else{
			console.log("Help failed");
			return message.channel.send(
				":grey_question: Did you type that correctly?"
			);
		}
	}
};