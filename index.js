const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "!";
const botownerid = "339772891984035851";

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`); 
  client.users.get(botownerid).send("Hi owner, I am back after a restart.")
}); 

client.on('message', message => { 
  if (message.content.startsWith(prefix + 'ping')) { 
    message.channel.send('Pong 🏓'); 
  }
});
