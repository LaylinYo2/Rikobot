const Discord = require("discord.js");
const config = require("../config.json");
const ms = require("ms");
const PREFIX = '>';

module.exports.run = async (bot, message, args) => {
   
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Insufficient permission.");
    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!banUser) return message.channel.send("Couldn't find user | **Usage:** `>yeet @user <reason>`");
    if(banUser.hasPermission("ADMINISTRATOR")) return message.channel.send(":clown: You tried. :clown:");
    let banReason = args.join(" ").slice(22);
    if(!banReason) return message.channel.send("Specify a reason | **Usage:** `>yeet @user <reason>`")

    message.delete().catch();

    let banLogEmbed = new Discord.RichEmbed()
    .setAuthor(`Punishment | ${banUser.user.tag} | Yeet`, banUser.user.displayAvatarURL)
    .setDescription(`**Target:** ${banUser}\n \n**Issued By:** ${message.author}\n \n**Issued Reason:** ${banReason}\n \n**Issued In:** ${message.channel}`)
    .setColor("#e74c3c")
    .setTimestamp()
    .setFooter( `ID: ${banUser.id}`)

    let banChannel = message.guild.channels.find(c => c.name === "modlog")
    if(!banChannel) return message.channel.send("Couldn't find log channel.");

    banUser.send(`You've been **kicked** from **${message.guild.name}** for: **${banReason}**. Use this invite to join back -> https://discord.gg/knobbelboy`).catch(err => console.log(err))
    message.guild.member(banUser).kick(banReason);
    banChannel.send(banLogEmbed).then(() => {
        message.delete()
        message.channel.send(`${banUser} has been **YEETED**.`)
    });
}


module.exports.help = {
    name: "yeet"
}
