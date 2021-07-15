const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTARTOR")) return message.reply("Do you have the right perms");

    var infoEmbed = new discord.MessageEmbed()

        .setTitle(`Information | Ferre Games`)
        .setDescription(`Here is an overview of which social media i use:`)
        .addFields(
            { name: 'Youtube: ', value: 'Yes', inline: true },
            { name: 'Instagram: ', value: 'Yes', inline: true },
            { name: 'Twitter: ', value: 'Yes', inline: true },
            { name: 'Twitch: ', value: 'No', inline: true },
            { name: 'Facebook: ', value: 'No', inline: true },
            { name: '**----------**', value: 'Links:' },
            { name: 'Youtube:', value: '**[Click Here](https://www.youtube.com/channel/UCeIxTuEJdUis77O87FN7KMA)**' },
            { name: 'Instagram:', value: '**[Click Here](https://www.instagram.com/ferregames/)**' },
            { name: 'Twitter:', value: '**[Click Here](https://twitter.com/Ferre_Games)**' },
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#0000ff")

    return message.channel.send(infoEmbed);

}

module.exports.help = {
    name: "information"
}