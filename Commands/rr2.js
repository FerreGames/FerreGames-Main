const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTARTOR")) return message.reply("Do you have the right perms");

    var embed = new discord.MessageEmbed()

    .setTitle(`Continentals | Ferre Games`)
    .setDescription(`Here you can choose a role to which your country belongs.\n`)
    .addFields(
        { name: ':red_circle: ⇰', value: 'You live in a country that is in Europe' },
        { name: ':orange_circle: ⇰', value: 'You live in a country that is in Asia' },
        { name: ':yellow_circle: ⇰', value: 'You live in a country that is in Africa' },
        { name: ':green_circle: ⇰', value: 'You live in a country that is in Australia' },
        { name: ':blue_circle: ⇰', value: 'You live in a country that is in North America' },
        { name: ':purple_circle: ⇰', value: 'You live in a country that is in South America' },
    )
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter("Ferre Games©", client.user.displayAvatarURL())
    .setTimestamp()
    .setColor("#00bcff")

    return message.channel.send(embed);

}

module.exports.help = {
    name: "rr2"
}