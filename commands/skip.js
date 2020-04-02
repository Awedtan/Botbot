const { prefix } = require("./../config.json");

module.exports = {
	name: `${prefix}skip`,
	description: `\`skip\`: skips the current song`,

	execute(message, client) {
		try {
			const serverQueue = message.client.queue.get(message.guild.id);
			serverQueue.connection.dispatcher.end();
			message.channel.send(
				`:next_track: Skipped current song`
			);
			console.log("Skipped current song");
		} catch (err) {
			console.log("Skip failure (empty queue)");
			return message.channel.send(
				":x: There is nothing to skip"
			);
		}
	}
};