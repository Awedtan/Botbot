const { prefix } = require("./../config.json");

module.exports = {
	name: `${prefix}image`,
	description: ``,
	
	execute(message, client){
		const args = message.content.toLowerCase().split(" ");
		var sentPicture = false;
		
		if(message.content.toLowerCase().match("batman")){
			console.log();
			console.log("batman");
			message.channel.send({files: ["./images/batman.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("bruh")){
			console.log();
			console.log("bruh");
			message.channel.send({files: ["./images/bruh.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("eddy") || message.content.toLowerCase().match("edward")){
			console.log();
			console.log("edward");
			switch(Math.floor(Math.random()*6)){
				case 0:
					message.channel.send({files: ["./images/edward.jpg"]});
					break;
				case 1:
					message.channel.send({files: ["./images/edward2.jpg"]});
					break;
				case 2:
					message.channel.send({files: ["./images/edward3.jpg"]});
					break;
				case 3:
					message.channel.send({files: ["./images/edward4.jpg"]});
					break;
				case 4:
					message.channel.send({files: ["./images/edward5.jpg"]});
					break;
				case 5:
					message.channel.send({files: ["./images/edward6.jpg"]});
					break;
			}
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("fly")){
			console.log();
			console.log("fly");
			message.channel.send({files: ["./images/edward6.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("elephant")){
			console.log();
			console.log("elephant");
			message.channel.send({files: ["./images/elephant.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("janitor")){
			console.log();
			console.log("janitor");
			message.channel.send({files: ["./images/janitor.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("leaves")){
			console.log();
			console.log("leaves");
			message.channel.send({files: ["./images/leaves.jpg"]});
			sentPicture = true;
		}
		for(let i=0; i<args.length; i++){
			if(args[i] === "mao" || args[i] === "zedong"){
				console.log();
				console.log("mao zedong");
				message.channel.send({files: ["./images/mao.jpg"]});
				sentPicture = true;
				break;
			}
		}
		if(message.content.toLowerCase().match("max")){
			console.log();
			console.log("max");
			message.channel.send({files: ["./images/max.jpg"]});
			sentPicture = true;
		}
		
		if(message.content.toLowerCase().match("mcbessie")){
			console.log();
			console.log("mcbessie");
			message.channel.send({files: ["./images/mcbessie.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("mistake")){
			console.log();
			console.log("mistake");
			message.channel.send({files: ["./images/mistake.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("patriot")){
			console.log();
			console.log("patriot");
			message.channel.send({files: ["./images/patriot.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("menacing") || message.content.toLowerCase().match("paul")){
			console.log();
			console.log("paul");
			message.channel.send({files: ["./images/paul.jpg"]});
			sentPicture = true;
		}
		for(let i=0; i<args.length; i++){
			if(args[i] === "sam" || message.content.toLowerCase().match("samuel")){
				console.log();
				console.log("sam");
				message.channel.send({files: ["./images/sam.jpg"]});
				sentPicture = true;
				break;
			}
		}
		if(message.content.toLowerCase().match("skeletor")){
			console.log();
			console.log("skeletor");
			message.channel.send({files: ["./images/skeletor.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("slime")){
			console.log();
			console.log("slime");
			message.channel.send({files: ["./images/slime.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("sword")){
			console.log();
			console.log("sword");
			message.channel.send({files: ["./images/sword.jpg"]});
			sentPicture = true;
		}
		if(message.content.toLowerCase().match("zhenyang")){
			console.log();
			console.log("zhenyang");
			message.channel.send({files: ["./images/zhenyang.jpg"]});
			sentPicture = true;
		}
		return sentPicture;
	}
};