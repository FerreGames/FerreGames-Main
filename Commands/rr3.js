const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTARTOR")) return message.reply("Do you have the right perms");

    var embed = new discord.MessageEmbed()

    .setTitle(`Announcements | Ferre Games`)
    .setDescription(`Here you can choose a role according to how you want to receive announcementsIf you do not want to receive notifications.\n`)
    .addFields(
        { name: ':bell: ⇰', value: 'If you want to receive notifications' },
        { name: ':no_bell: ⇰', value: 'If you do not want to receive notifications' },
    )
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter("Ferre Games©", client.user.displayAvatarURL())
    .setTimestamp()
    .setColor("#00bcff")

    return message.channel.send(embed);

}

module.exports.help = {
    name: "rr3"
}