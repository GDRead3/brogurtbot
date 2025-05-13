const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides info about the specified user'),
    async execute(interaction) {
        await interaction.reply(`Username: ${interaction.user.username}\nID: ${interaction.user.id}`);
    },
};