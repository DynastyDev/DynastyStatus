const Discord = require('discord.js');
const client = new Discord.Client();

const developers = ['324249224969584642'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('pl')) {
client.user.setActivity(argresult, {type:'Playing'});
    message.channel.send(`Setting status : **${argresult}**`)
} else 
if (message.content.startsWith('st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/hadeel");
   message.channel.send(`Setting status : **${argresult}**`)
} else
if (message.content.startsWith('ls')) {
   client.user.setActivity(argresult, {type:'Listening'});
    message.channel.send(`Setting status : **${argresult}**`)
} else
if (message.content.startsWith('wt')) {
   client.user.setActivity(argresult, {type:'Watching'});
    message.channel.send(`Setting status : **${argresult}**`)
}
});



client.login(process.env.BOT_TOKEN);
