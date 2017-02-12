// Made by @7Snails

const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('./config.json');
const fs = require("fs");
const request = require("request");

var prefix = config.prefix;
var avatar = config.avatar;

bot.on("message", message => {

    if(message.author.bot) return;

    if(!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0].toLowerCase();
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    console.log(message.author.username + ": " + message.content.toString())

    /* Commands */

    if(command === "blocktext") {
        var letters = args.join("").toLowerCase().split("");
        var i = 0;
        var output = "";
        while(i < letters.length) {
            output = output + ":regional_indicator_" + letters[i] + ":";
            i++
        }
        message.channel.sendMessage(output);
    }

    /*-----------*/

});

bot.on('ready', () => {
      console.log("Logged in! Serving in " + bot.guilds.array().length + " servers");
      bot.user.setGame("Type " + prefix + "help for a list of commands!");
      bot.user.setAvatar(avatar);
});

bot.login(config.token);
