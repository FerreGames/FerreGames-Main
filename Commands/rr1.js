const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTARTOR")) return message.reply("Do you have the right perms");

    var embed = new discord.MessageEmbed()

    .setTitle(`Ages | Ferre Games`)
    .setDescription(`Here you can choose a role to which your age belongs.\n`)
    .addFields(
        { name: ':one: ⇰', value: 'Age between 6 & 15' },
        { name: ':two: ⇰', value: 'Age between 16 & 25' },
        { name: ':three: ⇰', value: 'Age between 26 & 35' },
        { name: ':four: ⇰', value: 'Age between 36 & 45' },
        { name: ':five: ⇰', value: 'Age between 46 & 55' },
        { name: ':six: ⇰', value: 'Age above 55' },
    )
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter("Ferre Games©", client.user.displayAvatarURL())
    .setTimestamp()
    .setColor("#00bcff")

    return message.channel.send(embed);

}

module.exports.help = {
    name: "rr1"
}