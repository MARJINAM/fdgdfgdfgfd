const Discord = require('discord.js');
const ayar = require('../ayar.json');

var prefix = ayar.prefix;

exports.run = async (client, message, args) => {
  if (!message.member.roles.has(`602821408216580097`) && !message.member.roles.has(`596272746967597056`) && message.author.id !== '602821408216580097') return message.channel.send(`⚠ **|** Üzgünüm, yetkin yok.`)
    if (!args[0]) return message.channel.send(`⚠ **|** Üyenin ismini/idsini gir veya üyeyi etiketle.`)
    let uye = message.mentions.members.first() || message.guild.member(args[0]) || message.guild.members.find(e => e.displayName.toLowerCase().includes(args[0].toLowerCase()))
    if (!uye) return message.channel.send(`⚠ **|** Bu üyeyi bulamadım, lütfen tekrar dene`)
     let yeniad = args.slice(1).join(' ')
    if (!yeniad) {
      var za = uye.displayName
    } else {
      var za = yeniad
    }
    message.delete(5000)
    uye.setNickname(`${ayar.tag1} ${za}`)
    message.channel.send(`<a:tik:605024713034563585>  <@${uye.id}> üyesine **${ayar.tag1}** tagı verildi!`)

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tag',
  description: 'Anlık ping değerlerini gösterir.',
  usage: "tag"
};;