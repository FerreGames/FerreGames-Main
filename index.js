const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const client = new discord.Client();

client.login(process.env.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("Fewy Farming", { type: "WATCHING" });

});

client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get('864248537032949780');

    if (!role) console.log('geen role gevonden');

    member.roles.add(role);

    var channel = member.guild.channels.cache.get('861929320833351711');

    if (!channel) console.log('Geen channel gevonden');

    var userTag = member.user
    var user = member.user.username
    var userAvatar = member.user.displayAvatarURL()

    var joinEmbed = new discord.MessageEmbed()

        .setTitle(`New member has joined our discord`)
        .setDescription(`${userTag}, Welcome in the Official **Fewy Farming** discord server, can we ask you to read the follow channel <#860811742920704010>.`)
        .setAuthor(`${user}`, `${userAvatar}`)
        .setFooter("Fewy©", client.user.displayAvatarURL())
        .setTimestamp()
        .setColor("#0000ff")

    channel.send(joinEmbed);

});

client.on("guildMemberRemove", member => {

    var channel = member.guild.channels.cache.get('861929673289498625');

    if (!channel) console.log('Geen channel gevonden');

    var userTag = member.user
    var user = member.user.username
    var userAvatar = member.user.displayAvatarURL()

    var joinEmbed = new discord.MessageEmbed()

    .setTitle(`Old member has Leaved our discord`)
    .setDescription(`${userTag}, Goodbye we hope you had a great time. And who knows, see you soon!`)
    .setAuthor(`${user}`, `${userAvatar}`)
    .setFooter("Fewy©", client.user.displayAvatarURL())
    .setTimestamp()
    .setColor("#0000ff")

    channel.send(joinEmbed);

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var commands = messageArray[0];

    var args = messageArray.slice(1);

});