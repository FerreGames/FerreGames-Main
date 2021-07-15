const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Do you have the right perms");

    if (!args[0]) return message.reply("Enter a valid user");

    if (!args[1]) return message.reply("Please provide a valid reason");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Internal error");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("No valid user found");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't warn a Moderator");

    

}

module.exports.help = {
    name: "warn"
}