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

        .setTitle("Warned")
        // .setDescription(``)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#0000ff")
        // .setColor("#ff0000")
        // .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Gewarnd:** ${warnUser} (${warnUser.id})
        **Warning door:** ${message.author}
        **Redenen: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

}

module.exports.help = {
    name: "warn"
}