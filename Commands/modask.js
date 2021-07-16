const discord = require("discord.js");

module.exports.run = async(client, message, args) =>{

     var embed = new discord.MessageEmbed()

        .setTitle(`Ask Mods | Ferre Games`)
        .setDescription(`Here you have a format you can use to ask what mods I used in a specific video.`)
        .addFields(
            { name: 'Format:', value: '> - Video: {Number and map of the video, Stappenbach #1}\n> - With moment: {A specific moment of the video, 1:15-6:15}\n> - With kind of mod: {With kind of mod, red trailer}\n> <@552473047144071168>', inline: false },
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#00bcff")

    return message.channel.send(embedNaam);

}

module.exports.help = {
    name: "embed"
}