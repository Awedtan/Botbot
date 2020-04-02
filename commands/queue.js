const { prefix } = require("./../config.json");

module.exports = {
	name: `${prefix}queue`,
	description: `\`queue\`: displays the current song and any enqueued songs`,

	execute(message, client) {
		try {
			const serverQueue = message.client.queue.get(message.guild.id);
			var queueMessage = `:arrow_forward: Now playing - \`${serverQueue.songs[0].title}\`\n`;
			for (let i = 1; i < serverQueue.songs.length; i++) {
				queueMessage += `:hash: ${i} - \`${serverQueue.songs[i].title}\`\n`;
			}
			serverQueue.textChannel.send(
				queueMessage
			);
			console.log(`Displayed ${serverQueue.songs.length} songs currently playing or in queue`);
		} catch (err) {
			console.log("Queue failure (empty queue)");
			return message.channel.send(
				":x: The queue is empty"
			);
		}
	}
};