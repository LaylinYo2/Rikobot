const {bot} = require("../app");
const config = require("../config.json");
const Discord = require("discord.js");
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.on("ready", async () =>{
    console.log(`${bot.user.username} is ready! Initialized version 1.0! Connected to ${bot.guilds.size} server.`);
    bot.user.setActivity("Knob's Server", {type: "WATCHING"});
});
