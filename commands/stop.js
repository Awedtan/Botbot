const { prefix } = require("./../config.json");

module.exports = {
	name: `${prefix}stop`,
	description: ``,
	
	execute(message, client){
		try{
			const serverQueue = message.client.queue.get(message.guild.id);
			serverQueue.songs = [];
			serverQueue.connection.dispatcher.end();
			console.log("Stopped music playback");
			message.channel.send(
				":stop_button: Stopped music playback"
			);
		} catch(err){
			console.log("Stop failure (empty queue)");
			return message.channel.send(
				":x: I'm not playing anything"
			);
		}
	}
};