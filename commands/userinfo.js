const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Insufficient permission.");

    let user = message.mentions.users.first() || message.author;
    let member = message.mentions.users.first() || message.author;
    let adminRole = message.guild.roles.some(role => role.name === "ADMIN");
    let moderatorRole = message.guild.roles.find(role => role.name === "MODERATOR");
    let helperRole = message.guild.roles.find(role => role.name === "HELPER");
    let opRole = message.guild.roles.find(role => role.name === "Emilia Nepmit");


    let userinfo = {};
    userinfo.name = user.username;
    userinfo.avatar = user.avatarURL
    userinfo.discrim - `#${user.discriminator}`;
    userinfo.id = user.id;
    userinfo.status = user.presence.status;
    userinfo.registered = moment.utc(message.guild.members.get(user.id).user.createdAt).format("dddd, MMMM Do, YYYY");
    userinfo.joined = moment.utc(message.guild.members.get(user.id).user.joinedAt).format("dddd, MMMM Do, YYYY");


        let embedNonStaff = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setDescription(user)
        .setThumbnail(userinfo.avatar)
        .addField(`Joined`, userinfo.joined, true)
        .addField(`Joined At`, `WIP`, true)
        .addField(`Registered`, userinfo.registered, true)
        .addField(`Roles [${message.member.roles.size - 1}]`, message.member.roles.map(r => r).join(" ").replace("@everyone", " "))
        .addField(`Key Permissions`, `WIP`)
        .addField(`Acknowledgements`, `WIP`)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        
        return message.channel.send(embedNonStaff)

}

module.exports.help = {
    name: "userinfo"
}