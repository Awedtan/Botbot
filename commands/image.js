const { prefix } = require("./../config.json");

module.exports = {
	name: `${prefix}image`,
	description: ``,

	execute(message, client) {
		const args = message.content.toLowerCase().split(" ");
		var sentPicture = false;

		if (message.content.toLowerCase().match("aaa")) {
			console.log();
			console.log("aaa");
			message.channel.send({ files: ["./images/aaa.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("aditya") || message.content.toLowerCase().match("deet")) {
			console.log();
			console.log("aditya");
			switch (Math.floor(Math.random() * 2)) {
				case 0:
					message.channel.send({ files: ["./images/aditya.jpg"] });
					break;
				case 1:
					message.channel.send({ files: ["./images/aditya2.jpg"] });
					break;
			}
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("batman")) {
			console.log();
			console.log("batman");
			message.channel.send({ files: ["./images/batman.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("boys")) {
			console.log();
			console.log("boys");
			message.channel.send({ files: ["./images/boys.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("bruh")) {
			console.log();
			console.log("bruh");
			message.channel.send({ files: ["./images/bruh.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("cool")) {
			console.log();
			console.log("cool");
			message.channel.send({ files: ["./images/cool.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("dumb")) {
			console.log();
			console.log("dumb");
			message.channel.send({ files: ["./images/dumb.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("eddy") || message.content.toLowerCase().match("edward")) {
			console.log();
			console.log("edward");
			switch (Math.floor(Math.random() * 8)) {
				case 0:
					message.channel.send({ files: ["./images/edward.jpg"] });
					break;
				case 1:
					message.channel.send({ files: ["./images/edward2.jpg"] });
					break;
				case 2:
					message.channel.send({ files: ["./images/edward3.jpg"] });
					break;
				case 3:
					message.channel.send({ files: ["./images/edward4.jpg"] });
					break;
				case 4:
					message.channel.send({ files: ["./images/edward5.jpg"] });
					break;
				case 5:
					message.channel.send({ files: ["./images/edward6.jpg"] });
					break;
				case 6:
					message.channel.send({ files: ["./images/edward7.jpg"] });
					break;
				case 7:
					message.channel.send({ files: ["./images/edward8.jpg"] });
					break;
			}
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("elephant")) {
			console.log();
			console.log("elephant");
			message.channel.send({ files: ["./images/elephant.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("fly")) {
			console.log();
			console.log("fly");
			message.channel.send({ files: ["./images/edward6.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("gay") || message.content.toLowerCase().match("furry")) {
			console.log();
			console.log("gay");
			message.channel.send({ files: ["./images/gay.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("janitor")) {
			console.log();
			console.log("janitor");
			message.channel.send({ files: ["./images/janitor.jpg"] });
			sentPicture = true;
		}
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "jon" || message.content.toLowerCase().match("jonathan") || message.content.toLowerCase().match("jonny")) {
				console.log();
				console.log("jonathan");
				switch (Math.floor(Math.random() * 4)) {
					case 0:
						message.channel.send({ files: ["./images/jonathan.jpg"] });
						break;
					case 1:
						message.channel.send({ files: ["./images/jonathan2.jpg"] });
						break;
					case 2:
						message.channel.send({ files: ["./images/jonathan3.jpg"] });
						break;
					case 3:
						message.channel.send({ files: ["./images/jonathan4.jpg"] });
						break;
				}
				sentPicture = true;
				break;
			}
		}
		if (message.content.toLowerCase().match("leaves")) {
			console.log();
			console.log("leaves");
			message.channel.send({ files: ["./images/leaves.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("long")) {
			console.log();
			console.log("long");
			message.channel.send({ files: ["./images/long.jpg"] });
			sentPicture = true;
		}
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "mao" || message.content.toLowerCase().match("zedong")) {
				console.log();
				console.log("mao zedong");
				message.channel.send({ files: ["./images/mao.jpg"] });
				sentPicture = true;
				break;
			}
		}
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "max" || message.content.toLowerCase().match("maxy")) {
				console.log();
				console.log("max");
				switch (Math.floor(Math.random() * 3)) {
					case 0:
						message.channel.send({ files: ["./images/max.jpg"] });
						break;
					case 1:
						message.channel.send({ files: ["./images/max2.jpg"] });
						break;
					case 2:
						message.channel.send({ files: ["./images/max3.jpg"] });
						break;
				}
				sentPicture = true;
				break;
			}
		}
		if (message.content.toLowerCase().match("bessie")) {
			console.log();
			console.log("mcbessie");
			message.channel.send({ files: ["./images/mcbessie.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("mistake")) {
			console.log();
			console.log("mistake");
			message.channel.send({ files: ["./images/mistake.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("patriot")) {
			console.log();
			console.log("patriot");
			message.channel.send({ files: ["./images/patriot.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("paul") || message.content.toLowerCase().match("menacing")) {
			console.log();
			console.log("paul");
			message.channel.send({ files: ["./images/paul.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("ricky")) {
			console.log();
			console.log("ricky");
			switch (Math.floor(Math.random() * 2)) {
				case 0:
					message.channel.send({ files: ["./images/ricky.jpg"] });
					break;
				case 1:
					message.channel.send({ files: ["./images/ricky2.jpg"] });
					break;
			}
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("sajon")) {
			console.log();
			console.log("sajon");
			switch (Math.floor(Math.random() * 6)) {
				case 0:
					message.channel.send({ files: ["./images/sajon.jpg"] });
					break;
				case 1:
					message.channel.send({ files: ["./images/sajon2.jpg"] });
					break;
				case 2:
					message.channel.send({ files: ["./images/sajon3.jpg"] });
					break;
				case 3:
					message.channel.send({ files: ["./images/sajon4.jpg"] });
					break;
				case 4:
					message.channel.send({ files: ["./images/sajon5.jpg"] });
					break;
				case 5:
					message.channel.send({ files: ["./images/sajon6.jpg"] });
					break;
			}
			sentPicture = true;
		}
		for (let i = 0; i < args.length; i++) {
			if (args[i] === "sam" || message.content.toLowerCase().match("samuel")) {
				console.log();
				console.log("samuel");
				switch (Math.floor(Math.random() * 3)) {
					case 0:
						message.channel.send({ files: ["./images/samuel.jpg"] });
						break;
					case 1:
						message.channel.send({ files: ["./images/samuel2.jpg"] });
						break;
					case 2:
						message.channel.send({ files: ["./images/samuel3.jpg"] });
						break;
				}
				sentPicture = true;
				break;
			}
		}
		if (message.content.toLowerCase().match("skeletor") || message.content.toLowerCase().match("skull") || message.content.toLowerCase().match("spook")) {
			console.log();
			console.log("skeletor");
			message.channel.send({ files: ["./images/skeletor.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("slime")) {
			console.log();
			console.log("slime");
			message.channel.send({ files: ["./images/slime.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("squad")) {
			console.log();
			console.log("squad");
			message.channel.send({ files: ["./images/squad.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("stubby") || message.content.toLowerCase().match("sarah") || message.content.toLowerCase().match("miranda")) {
			console.log();
			console.log("stubby");
			message.channel.send({ files: ["./images/stubby.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("sword")) {
			console.log();
			console.log("sword");
			message.channel.send({ files: ["./images/sword.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("toucan") || ((message.content.toLowerCase().match("fruit") || message.content.toLowerCase().match("froot")) && message.content.toLowerCase().match("loop"))) {
			console.log();
			console.log("toucan");
			message.channel.send({ files: ["./images/toucan.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("trash")) {
			console.log();
			console.log("trash");
			message.channel.send({ files: ["./images/trash.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("vaseehar")) {
			console.log();
			console.log("vaseehar");
			switch (Math.floor(Math.random() * 2)) {
				case 0:
					message.channel.send({ files: ["./images/vaseehar.jpg"] });
					break;
				case 1:
					message.channel.send({ files: ["./images/vaseehar2.jpg"] });
					break;
			}
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("vector")) {
			console.log();
			console.log("vector");
			message.channel.send({ files: ["./images/vector.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("william")) {
			console.log();
			console.log("william");
			switch (Math.floor(Math.random() * 5)) {
				case 0:
					message.channel.send({ files: ["./images/william.jpg"] });
					break;
				case 1:
					message.channel.send({ files: ["./images/william2.jpg"] });
					break;
				case 2:
					message.channel.send({ files: ["./images/william3.jpg"] });
					break;
				case 3:
					message.channel.send({ files: ["./images/william4.jpg"] });
					break;
				case 4:
					message.channel.send({ files: ["./images/william5.jpg"] });
					break;
			}
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("yah") || message.content.toLowerCase().match("hai")) {
			console.log();
			console.log("yah hai");
			message.channel.send({ files: ["./images/yahhai.jpg"] });
			sentPicture = true;
		}
		if (message.content.toLowerCase().match("zhen") || message.content.toLowerCase().match("yang")) {
			console.log();
			console.log("william");
			switch (Math.floor(Math.random() * 2)) {
				case 0:
					message.channel.send({ files: ["./images/zhenyang.jpg"] });
					break;
				case 1:
					message.channel.send({ files: ["./images/zhenyang2.jpg"] });
			}
			sentPicture = true;
		}
		return sentPicture;
	}
};