const Discord = require("discord.js");
const config = require("../config.json");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Insufficient permission.");
    let dmUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!dmUser) return message.channel.send("Couldn't find user. | **Usage:** `>fakedm @user <message>`");
    
    const sayMessage = args.slice(1).join(" ");
    dmUser.send(`${sayMessage}`);
    message.delete();
    
}

module.exports.help = {
    name: "fakedm"
}