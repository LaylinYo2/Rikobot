const Discord = require("discord.js");
const {bot} = require("../app");
const config = require("../config.json");

    let emojiname = ["Emiliawow"]
    let rolename=["Green Hundred"]

module.exports.run = async (bot, message, args) => {
    
    let reactionEmbed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setTimestamp()
    .setColor("#e74c3c")
    .setDescription("React with <a:Emiliawow:639788767800066048> to get the GreenHundred role!")
    
    message.channel.send(reactionEmbed).then(async msg => {
              if(!message.channel.guild) return;
  for(let n in emojiname){
  let emoji =[message.guild.emojis.find(r => r.name == emojiname[n])];
  for(let i in emoji){
   message.react(emoji[i]);
  }
 }
})
    


bot.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == emojiname[n]){
    let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
}
});


bot.on("messageReactionRemove",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  for(let n in emojiname){
  if(reaction.emoji.name == emojiname[n]){
    let role = reaction.message.guild.roles.find(r => r.name == rolename[n]);   
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  }
});
}
module.exports.help = {
    name: "setreaction"
}
