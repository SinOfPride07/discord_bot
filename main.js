const Discord = require('discord.js'); 
const client = new Discord.Client();
const https = require("https");
const { Client, MessageAttachment, MessageEmbed } = require('discord.js');

client.once('ready', () => {
    console.log('DemoBot is online!');
}); 

//NEW MEMBER WELCOME
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
    console.log(channel);
    if (!channel) return;
    welcomeMsg = [ "Leave your weapon at the door!",
                  "Playing some games, aren't we today?",
                  "Tell me, is CS>Valorant?",
                  "Kings Die, Realms Fall, But we my comrade RESPAWN!" ,
                  "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain’t nothing fair. Well that being said, have a good stay here!"];
    randomNumber = Math.floor(Math.random() * 5 );
    tosendText = welcomeMsg[randomNumber]
    channel.send(`Welcome, ${member}. ${tosendText}`);
  });
  

//IMAGE UPLOAD

client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
      // Create the attachment using MessageAttachment
      const attachment = new MessageAttachment('./rip.jpg');
      // Send the attachment in the message channel with a content
      message.channel.send(`${message.author},`, attachment);
    }
  });


const prefix = '!'

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;
    
    else if(message.content.startsWith('!ban')) {
            const user = message.mentions.users.first();
            if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                .ban({
                    reason: 'BANNED!',
                })
                .then(() => {
                    message.reply(`BANNED ${user.tag}`);
                })
                .catch(err => {
                    message.reply('I am powerless here');
                
                    console.error(err);
                });
            } else {
                message.reply("Failed!");
            }
            } else {
            message.reply("Ban WHO?");
            }
    }
    else if (message.content.startsWith('!kick')) {
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick('Get outta here')
              .then(() => {
                message.reply(`THROWED ${user.tag}`);
              })
              .catch(err => {
                message.reply("There's always a bigger fish."); //fail 
                // Log the error
                console.error(err);
              });
          } else {
            message.reply("Are you retarded?");
          }
        } else {
          message.reply("Just say the GODDAMN NAME!");
        }
      }
      else if (message.content === '!help'|| message.content === '!commands') {
        const embed = new MessageEmbed()
          .setTitle('A Bot by Bot for Bots.')
          .setColor(0x10DF10)
          .setDescription('\n\n List of Commands are given below:\n !kick - to kick a member\n !ban - to ban a member\n !toxic - to check the toxic meter\n !joke - hear a toxic joke\n\n An Exclusive Bot for TOXIC TRYHARDS!');
        message.channel.send(embed);
      }
      else if (message.content === '!toxic') {
          //message.channel.send(`HyperBOI_69 : ${hb_counter}\n Ghoxtrix : ${g_counter} \n SinOfPride07 : ${sop_counter} \n Miserable_TaiPAn : ${p_counter}\n JeSus : ${s_counter}\n fifuhoobs : ${n_counter}`);
          const embed = new MessageEmbed()
          .setTitle('TOXIC METER:')
          .setColor('#FF0000')
          .setDescription(`HyperBOI_69 : ${hb_counter}\n Ghoxtrix : ${g_counter} \n SinOfPride07 : ${sop_counter} \n Miserable_TaiPAn : ${p_counter}\n JeSus : ${s_counter}\n fifuhoobs : ${n_counter}`);
        message.channel.send(embed);
        }
        else if(message.content === '!joke'){
          const url = "https://sv443.net/jokeapi/v2/joke/Dark?format=txt&type=twopart";
          https.get(url, function(response){
            response.on("data", function(data){
              const jokeData = data;
              //console.log(jokeData);
              message.reply("Altough there's no better than you, I'll still tell you one. Here it is: \n\n ");
              message.channel.send("\n"+jokeData+ "");
            });
        });
        };

    
});



forbiddenWords = ['anus',
    'arse',
    'ass',
    'ass fuck',
    'ass hole',
    'assfucker',
    'asshole',
    'assshole',
    'bastard',
    'bitch',
    'black cock',
    'bloody hell',
    'boong',
    'cock',
    'cockfucker',
    'cocksuck',
    'cocksucker',
    'coon',
    'coonnass',
    'crap',
    'cunt',
    'cyberfuck',
    'damn',
    'darn',
    'dick',
    'dirty',
    'douche',
    'dummy',
    'erect',
    'erection',
    'erotic',
    'escort',
    'fag',
    'faggot',
    'fuck',
    'Fuck off',
    'fuck you',
    'fuckass',
    'fuckhole',
    'god damn',
    'gook',
    'hard core',
    'hardcore',
    'homoerotic',
    'hore',
    'lesbian',
    'lesbians',
    'mother fucker',
    'motherfuck',
    'motherfucker',
    'negro',
    'nigger',
    'orgasim',
    'orgasm',
    'penis',
    'penisfucker',
    'piss',
    'piss off',
    'porn',
    'porno',
    'pornography',
    'pussy',
    'retard',
    'sadist',
    'sex',
    'sexy',
    'shit',
    'slut',
    'son of a bitch',
    'suck',
    'tits',
    'viagra',
    'whore',
    'xxx',
    'maderchod',
    'madherchod',
    'bhosadike',
    'bhosdike',
    'bsdk',
    'behenchod',
    'bc',
    'mc',
    'betichod',
    'chodu',
    'gay',
    'gae',
    'gaand',
    'gandu',
    'chutiya',
    'gadha',
    'idiot',
    'idot',
    'lauda',
    'loda',
    'lund',
    'hijra',
    'kutta',
    'kamina',
    'harami',
    'randi',
    'sala',
    'saala',
    'chut',
    'chuchi',
    'boobs',
    'bur',
    'jhat',
    'jhaat',
    'jhaatu',
    'lavde',
    'maa',
    'chudao',
    'panda',
    'pandachodi',
    'madharchod',
    'madarchod',
    'bhosdiwale',
    'bhosdiwala',
    'bahinchod',
    'boor',
    'chorchoda',
    'gand',
    'madaarchod',
    'land',
    'bakchodi',
    'lwda',
    'lawda',
    'chodo',
    'lasan'
];
sop_counter = 0;
hb_counter = 0;
g_counter = 0;
p_counter = 0;
n_counter = 0;
s_counter = 0;
client.on('message', message =>{
    for (var i = 0; i < forbiddenWords.length; i++) {
    if (message.content.toLowerCase().includes(forbiddenWords[i]) && !(message.author.bot)) {
        message.react(`🤬`)
        if(message.author.username === 'SinOfPride07')
        sop_counter = sop_counter + 1;
        if(message.author.username === 'Ghoxtrix.')
        g_counter = g_counter + 1;
        if(message.author.username === 'HyperBOI_69')
        hb_counter = hb_counter + 1;
        if(message.author.username === 'Currency_180')
        p_counter = p_counter + 1;
        if(message.author.username === 'JeSus')
        s_counter = s_counter + 1;
        if(message.author.username === 'fifuhoobs')
        n_counter = n_counter + 1;
        
      break;
    }
  }

});
messageVC =["Join the voice chat you desperate fucking imbecile!", 
                       "Please join the voice chat respected kind sir. *begs humbly*",
                       "Tera awaaz sunne ka mann kar raha h bhai",
                       "Aao jaldi loda, game khelenge yaar"]



client.on('message', message =>{
    if(message.content.includes('vc') || message.content.includes('VC'))
    {
        randomNumber = Math.floor(Math.random() * 4);
        message.channel.send(messageVC[randomNumber]);
    }
});





client.login(process.env.token);
