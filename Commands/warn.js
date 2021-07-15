const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Do you have the right perms");

    if (!args[0]) return message.reply("Enter a valid user");

    if (!args[1]) return message.reply("Please provide a valid reason");

    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("Internal error");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("No valid user found");

    if (warnUser.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't warn a Moderator");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()

        .setTitle(`Warned`)
        .setDescription(`Here you can find all the info about this warn`)
        .addFields(
            { name: 'Warned by:', value: `${message.author}` },
            { name: 'Warned user:', value: `${warnUser}` },
            { name: 'Warn reason:', value: `${reason}` },
            { name: 'Warns:', value: `${warns[warnUser.id].warns}` },
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#00bcff")

    var channel = message.member.guild.channels.cache.get("865197848101388288");

    if (!channel) return;

    channel.send(embed);

}

module.exports.help = {
    name: "warn"
}