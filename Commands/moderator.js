const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var modEmbed = new discord.MessageEmbed()

    .setTitle(`Moderator Application | Fewy`)
    .setDescription(`Hello, this message explains very briefly what exactly we expect from you as a moderator, if you meet those requirements you can fill out the message format.`)
    .setFooter("Fewy©", client.user.displayAvatarURL())
    .setTimestamp()
    .setColor("#0000ff")

    channel.send(modEmbed);

}

module.exports.help = {
    name: "moderator"
}