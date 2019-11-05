const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Insufficient permission.");


  let guildMember;

  if (message.mentions.members.first()) {
    guildMember = message.mentions.members.first();
  } else {
    guildMember = message.member;
  }
  
    let user = message.mentions.users.first() || message.author;
    let member = message.mentions.users.first() || message.author;
    let adminRole = message.guild.roles.some(role => role.name === "ADMIN");
    let moderatorRole = message.guild.roles.find(role => role.name === "MODERATOR");
    let helperRole = message.guild.roles.find(role => role.name === "HELPER");
    let opRole = message.guild.roles.find(role => role.name === "Emilia Nepmit");
    
    let keyPerms = ["ADMINISTRATOR", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", 
                    "MANAGE_GUILD", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", 
                    "MENTION_EVERYONE", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS",
                    "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_EMOJIS"];
    let userinfo = {};
    userinfo.name = user.username;
    userinfo.avatar = user.avatarURL;
    userinfo.discrim - `#${user.discriminator}`;
    userinfo.id = user.id;
    userinfo.status = user.presence.status;
    userinfo.registered = message.guild.members.get(user.id).user.createdAt;
    userinfo.joined = message.guild.members.get(user.id).joinedAt;


        let embedNonStaff = new Discord.RichEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setDescription(user)
        .setThumbnail(userinfo.avatar)
        .addField(`Joined`, userinfo.joined.toDateString(), true)
        .addField(`Joined At`, userinfo.joined.toTimeString(), true)
        .addField(`Registered`, userinfo.registered.toDateString(), true)
        .addField(`Roles [${guildMember.roles.size - 1}]`, guildMember.roles.array().join(" ").replace("@everyone", " "))
        .addField(`Key Permissions`, keyPerms.filter(perm => guildMember.permissions.has(perm)).join(" "))
        .addField(`Acknowledgements`, `WIP`)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        
        return message.channel.send(embedNonStaff)

}

module.exports.help = {
    name: "userinfo"
}