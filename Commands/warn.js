const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

    if (!message.member.hasPermission("MANAGE_NICKNAME")) return message.reply("Do you have the right perms");

    if (!args[0]) return message.reply("Enter a valid user");

    if (!args[1]) return message.reply("Please provide a valid reason");

    if (warnUser.hasPermission("MANAGE_NICKNAME")) return message.reply("You can't warn a Moderator");

    if (!warnUser) return message.reply("No valid user found");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");



}

module.exports.help = {
    name: "warn"
}