// BASIC DISCORD BOT V1
// AUTHOR: Devi3nt_Lab

const Discord = require('discord.js');
const client = new Discord.Client();


// new user joins the server
client.on('guildMemberAdd', member => {

  //check for a new member
  const channel = member.guild.channels.find(channel => channel.name === "new_players");
  const rules =  member.guild.channels.find(channel => channel.name === "what_you_need_to_know");

  // exit if not found
  if(!channel) return;

  // assorted channel messages. We will make a respository of them.
  // the number in the parentheses is the ceiling and the other is the floor.
  var rando = Math.floor((Math.random() * 12) + 1);

  // this works.
  // you need back ticks and the exact notations here, btw.
  // just add more greetings as you wish.
  switch(rando){
    case 1:
      var hook = `Did ${member} bring charceuterie and cheese boards for the entire party? Dig in, folks!`;
      break;
    case 2:
      var hook = `They say the more the merrier. Since ${member} arrived, we all say 'spumoni-flavored twinkies.'`;
      break;
    case 3:
      var hook = `${member}? Sorry, you're not on the list. Right this way!`;
      break;
    case 4:
      var hook = `No shoes, no shirt and no pants ${member}? Here's an lifetime pass to our VIP lounge!`;
      break;
    case 5:
      var hook = `( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°) LOOK EENTOO MY EYEEEEZZZ ${member} ( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)`;
      break;
    case 6:
      var hook = `Wook at meee ${member}, I'm Doktor ZOOOIIIDBERG, homeowner! I'm a cowboy, I am!`;
      break;
    case 7:
      var hook = `Have you seen mah lemmons ${member}? Ah wan mah lemmons.`;
      break;
    case 8:
      var hook = `According to our records, ${member} has an overdue balance of HELLLLA BREEEAD. And 17 cents.`;
      break;
    case 9:
        var hook = `You spilled my egg yolk, ${member}. I needed that egg yolk to make hollandaise.`;
        break;
    case 10:
      var hook = `We all know one thing for certain: if ${member} sets foot in a chat room, everyone present should secure premium health insurance effective immediately.`;
      break;
    case 11:
      var hook = `${member}, please melt some glass and blow me a Klein bottle. Thanks!`;
      break;
    case 12:
        var hook = `${member}, just so you know, throwing non-biodegradeable straws off the walls of Macchu Picchu is not cool.`;
        break;
  }

  channel.send(hook.concat(`\n Everything you need to know is in <#${rules.id}>. Welcome to the party.`));
});

//user leaves the server
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find(channel => channel.name === "new_players"); // get a specific channel by name

  channel.send('Come back soon ' + member.user.username + '; we will miss you!');
});

// checks for succesful login
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})



// message listener
client.on('message', msg => {

  const PREFIX = "!";
    
    //breaks up a substring starting at the position in the first parentheses into arrays of characters by a space.
    let args = msg.content.substring(PREFIX.length).split(" ");

    // create a new string to send suggestions for. Args[1] will not work. cut off everything ater first space.

    var suggestion = msg.content.substring(8);

    switch(args[0]){
  
      // suggestions here. 
      // need to delete the message after posting it though. And change reply to a DM.
    case 'suggest':
      if (msg.channel.id === '482927652907253797'){
        client.channels.get(`616689616631627779`).send(suggestion); // get channel by Id, from developer mode
        msg.author.send('Thanks for your input. It really helps!');
        msg.delete();
      } else {
        msg.author.send("please use the suggestions channel for that. Thank you!");
        msg.delete();
      }
      break;
  
    case "yaboii":
      msg.reply("YA BOIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
      break;

    case "ping":
      msg.reply("Pong!");
      break;

    case "ding":
      msg.reply("Dong!");
      break;

    default:
      // code block
      break;
  }

  

})

client.login('NjQwOTQxMTkyNzM3MTk0MDAz.XcBKPg.YckhaurkWqd3faYX4k2edlqfj-I')