const {bot} = require("../app");
const config = require("../config.json");
const Discord = require("discord.js");
const fs = require("fs");
bot.commands = new Discord.Collection();

bot.on("guildMemberAdd", async member => {

    let logEmbed = new Discord.RichEmbed()
    .setAuthor(`Member joined`, member.user.displayAvatarURL)
    .setColor("#41f480")
    .setDescription(`${member} | **${member.user.username}** joined the server`)
    .setFooter(`ID: ${member.id}`)
    .setTimestamp()
  
    let logchannel = member.guild.channels.find(r => r.name === 'stafflogs');
  
    logchannel.send(logEmbed);
    //member.addRole(member.guild.roles.find(role => role.name === "Members"));
  });
