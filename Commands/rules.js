const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTARTOR")) return message.reply("Do you have the right perms");

    var infoEmbed = new discord.MessageEmbed()

        .setTitle(`Rules | Ferre Games`)
        .setDescription(`Here is an overview the rules in this discord:`)
        .addFields(
            { name: "1) Chat Rules:", value: "1.1) No swearing\n1.2)No caps\n1.3) No spamming\n1.4) No rascism\n1.5) No flooding\n1.6) No discrimination\n1.7) No political/religious views\n1.8) No diffamation\n1.9) Use correct channels\n1.10) No begging for money\n1.11) Only English is allowed in the server\n1.12 Don't say any menaces\n1.13) Respect topics of each channels" },
            { name: "2) Voice Rules:", value: "2.1) Don't cry\n2.2) No swearing\n2.3) No Publicity\n2.4) No rascism\n2.5) No discrimination\n2.6) No begging for money\n2.7) Only English is allowed\n2.8) Don't say any menaces\n2.9) No political/religious views" },
            { name: "3) Tag Rules:", value: "3.1)Tag <@&864445557086355476> or <@&864446529942585354> only if it's needed\n3.2) Don't tag <@552473047144071168>\n3.3) Don't try to tag everyone or here\n3.4) Don't spam tags(roles or peoples)" },
            { name: "4) Screenshot & picture & meme Rules:", value: "4.1) Don't post any political/religious content\n4.2) Don't post any rascist/discriminative content\n4.3) Don't post any screamers content" },
            { name: "5) Command Rules:", value: "5.1) Don't spam commands\n5.2) Don't spam tts commands\n5.3) Commands are only in <#865316365912113193>" },
            { name: "6) Mod Share Rules:", value: "6.1) Mod's scamming isn't allowed\n6.2) If you leak a mod without autorisation of the owner, sanctions can be applied"},
            { name: "7) Other Rules:", value: "7.1) No publicity in private messages\n7.2) No scamming\n7.3) Don't join the server with another account if you went banned with your first account\n7.4) You need to be 13 years old to use Discord, so if you are less than 13 years old, staff can apply sanctions"},
            { name: "8) IMPORTANT:", value: "The Lead team reserves the right to change the rules at any time without notice, so please check this channel regularly to avoid unnecessary problems. This helps you and the moderators"},
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter("Ferre Games©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#00bcff")

    return message.channel.send(infoEmbed);

}

module.exports.help = {
    name: "rules"
}