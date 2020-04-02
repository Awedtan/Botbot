const { prefix } = require("./../config.json");

module.exports = {
	name: `${prefix}remove`,
	description: `\`remove [position]\`: removes the song from the queue`,

	execute(message, client) {
		try {
			const args = message.content.split(" ");
			const serverQueue = message.client.queue.get(message.guild.id);
			if (args.length <= 1) {
				console.log("Remove failed (blank query)");
				return message.channel.send(
					":x: You didn't specify what to remove"
				);
			}
			else if (args.length != 1) {
				console.log("Remove failed (invalid query)");
				return message.channel.send(
					":x: Invalid queue position"
				);
			}

			var tempArr = [];
			if (args[1] <= serverQueue.songs.length - 1 && args[1] > 0) {
				for (let i = 0; i < serverQueue.songs.length; i++) {
					if (i != args[1]) {
						tempArr.push(serverQueue.songs[i]);
					}
					else {
						serverQueue.textChannel.send(
							`:eject: Removed \`${serverQueue.songs[i].title}\` from queue`
						);
						console.log(`Removed ${serverQueue.songs[i].title} from queue`);
					}
				}
				serverQueue.songs = [...tempArr];
			}
			else {
				console.log("Remove failed (invalid queue number)");
				serverQueue.textChannel.send(
					":x: Invalid queue number"
				);
			}
		} catch (err) {
			console.log("Remove failure");
			return message.channel.send(
				":pensive: Something went wrong"
			);
		}
	}
};