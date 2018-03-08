const Discord = require('discord.js');
const config = require("./config.json");
var client = new Discord.Client();



client.on('ready', () => {
    console.log('Connexion Réussie !');

    client.user.setStatus("dnd");

    client.user.setActivity("°Help - BigFamily");
});

client.on('message', message => {
    if (!message.author.bot) {
        if (message.content.startsWith(config.prefix)) {
            let args = message.content.replace(config.prefix, "").split(' ');
            let command = args[0];
            args.shift();


            if (command === "Help") {
                let embed = new Discord.RichEmbed();
                embed.setAuthor("Scarlet", "https://i.pinimg.com/originals/de/af/6c/deaf6c1c3b03bcb739f814a9d836be90.jpg");
                embed.setURL("https://discordapp.com/oauth2/authorize?client_id=419666180840882180&scope=bot&permissions=805314622");
                embed.setTitle("Cliquez Ici");
                embed.setDescription("Pour m'inviter :3");
                embed.setColor("72249F");
                embed.addBlankField(false);
                embed.addField("Les commandes !", "Pour afficher les commandes :3", false);
                embed.addField("Help", "Pour afficher les commandes");
                embed.addField("Brawlhalla", "Pour afficher ton niveau est ton classement");
                embed.addField("En cours !", "en cours de programmation :3");
                embed.addField("En cours !", "en cours de programmation :3");
                embed.addField("En cours !", "en cours de programmation :3");
                embed.addField("En cours !", "en cours de programmation :3");
                embed.addField("En cours !", "en cours de programmation :3");
                embed.addField("En cours !", "en cours de programmation :3");
                embed.setThumbnail("https://i.pinimg.com/originals/de/af/6c/deaf6c1c3b03bcb739f814a9d836be90.jpg");
                embed.setFooter("© Scarlet BigFamily");

                message.channel.send("", embed);

                console.log('La commande => ServeurInfo a etais utiliser');
            }
            if (command === "ServeurInfo");
            {
                let embed = new Discord.RichEmbed();
                console.log(message.author.username + "ton pseudo")
                embed.setThumbnail(URL = message.guild.iconURL)
                    .addField("💬 | Nom du serveur", message.guild.name, true)

                    .addField("📋 | ID du serveur", message.guild.id, true)

                    .addField("🙋 | Nombres de personnes", message.guild.memberCount, true)

                    .addField("💾 | Nombres de salons", message.guild.channels.size, true)

                    .addField("🔑 | Niveau de sécurité", message.guild.verificationLevel, true)

                    .setColor(5514911)

                    .addField("🎌 | Région", message.guild.region, true)

                var date = new Date(message.guild.createdAt);
                embed.addField("Date de création du serveur", date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear())

                message.channel.sendEmbed(embed)

                console.log('La commande => Test a etais utiliser');
            }
            if (command === "Master") {
                let embed = new Discord.RichEmbed();
                embed.setAuthor("Scarlet", "https://i.pinimg.com/originals/de/af/6c/deaf6c1c3b03bcb739f814a9d836be90.jpg");
                embed.setTitle("Mes créateurs");
                embed.setDescription("Rayan ᵠ#9939, *Merci a teamced pour l'aide qu'il m'a apporté pour créer ce magnifique bot* :heart:");
                embed.addField("Les dessins !", "Merci a Demeteos#3612");
                embed.setColor("72249F");
                embed.setFooter("© Scarlet BigFamily");

                message.channel.send("", embed);

                console.log('La commande => Surprise a etais utiliser');
            }

            if (command === "Surprise")
            {
                let embed = new Discord.RichEmbed();
                embed.setAuthor("Scarlet", "https://i.pinimg.com/originals/de/af/6c/deaf6c1c3b03bcb739f814a9d836be90.jpg");
                embed.setURL("https://shafou.com");
                embed.setTitle("Cliquez Ici");
                embed.setDescription("Surprise !");
                embed.setColor("72249F");
                embed.setThumbnail("https://i.pinimg.com/originals/de/af/6c/deaf6c1c3b03bcb739f814a9d836be90.jpg");
                embed.setFooter("© Scarlet BigFamily");

                message.channel.send("", embed);

                console.log('La commande => Test a etais utiliser');
            }
            if (command === "Test") {

            }
        }
    }
});

client.login("NDE5NjY2MTgwODQwODgyMTgw.DX2bbg.Ur8ezpH2jIUQsjOPC9OTMntVBsw");