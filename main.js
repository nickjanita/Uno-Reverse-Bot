const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');

const client = new Discord.Client();

client.once('ready', message =>{
    console.log("Uno Reverse is On!");
});

client.on('message', message=> {
    let reverse = false;
    let sentMessage = message.content.toLowerCase();
    console.log(sentMessage);
    if (sentMessage.startsWith('your')) {
        reverse = true;
    }
    else if (sentMessage.startsWith('ur')) {
        reverse = true;
    }
    else if (sentMessage.startsWith('your')) {
        reverse = true;
    }
    else if (sentMessage.startsWith('u r')) {
        reverse = true;
    }
    else if (sentMessage.startsWith('you are')) {
        reverse = true;
    }
    else if (sentMessage.startsWith("you're")) {
        reverse = true;
    }
    if (reverse){
        const attachment = new MessageAttachment('./unoreverse.png');
        message.channel.send(message.author, attachment);
        console.log("Uno Sent!");
    }
})
client.login('ODQ3NjIyNTQ5MzM1ODM0NjU1.YLAwAw.6WNJbsjKxwIr_if5_3-wcns7OfM');