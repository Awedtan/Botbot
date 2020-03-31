const { prefix } = require("./../config.json");

module.exports = {
	name: `${prefix}leave`,
	description: ``,
	
	execute(message, client){
		try{
			const queue = message.client.queue;
			const serverQueue = message.client.queue.get(message.guild.id);
			serverQueue.songs = [];
			queue.get(message.guild.id).voiceChannel.leave();
			isInChannel = false;
			queue.delete(message.guild.id);
			console.log("Left voice channel");
			return message.channel.send(
				":door::arrow_left: Left voice channel"
			);
		} catch(err){
			console.log("Leave failure (not in channel)");
			return message.channel.send(
				":x: I'm not in a voice channel"
			);
		}
	}
};