const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');

const log = require("./src/log");
const algo = require("./src/gearing");

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`

    if (message.substring(0, 1) == '!') {
        let args = message.substring(1).split(' ');
        let cmd = args[0];
        args = args.splice(1);

        log.log({ log: message, author: user })

        switch (cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;

            /// -- CLASSIC -- ///
            case 'classique':
            case 'common':
            case 'commun':
            case '1':
            case 'normal':
                bot.sendMessage({
                    to: channelID,
                    message: `${algo.algorithm("classique", parseInt(args[0], 10), parseInt(args[1], 10))}`
                });
                break;

            /// -- GOLD -- /// 
            case 'gold':
            case 'rare':
            case 'or':
            case '2':
                bot.sendMessage({
                    to: channelID,
                    message: `${algo.algorithm("or", parseInt(args[0], 10), parseInt(args[1], 10))}`
                });
                break;

            /// -- EPIC -- /// 
            case 'epic':
            case '3':
            case 'epique':
                bot.sendMessage({
                    to: channelID,
                    message: `${algo.algorithm("epic", parseInt(args[0], 10), parseInt(args[1], 10))}`
                });
                break;
                
            /// -- LEGENDARY -- /// 
            case 'legendaire':
            case '4':
            case 'legendary':
                bot.sendMessage({
                    to: channelID,
                    message: `${algo.algorithm("legendaire", parseInt(args[0], 10), parseInt(args[1], 10))}`
                });
                break;
            
            default:
                bot.sendMessage({
                    to: channelID,
                    message: log.messageArg
                });
         }
     }
});