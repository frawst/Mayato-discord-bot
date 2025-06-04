const { SlashCommandBuilder, MessagePayload, SlashCommandChannelOption } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('send_message')
        .setDescription('Send a message to an arbitrary channel within bot domain.')
        .addStringOption(option => 
            option
                .setName('target_id')
                .setDescription('The channel to send the message to')
                .setRequired(true)
        )
        .addStringOption(option => 
            option
                .setName('message')
                .setDescription('Message to be delivered.')
                .setRequired(true)
        ),
    async execute(interaction) {
        // interaction.guild is the object representing the Guild in which the command was run
        const channel = await interaction.client.channels.fetch(interaction.options.getString('target_id'));
        await channel.send(interaction.options.getString('message'))
        await interaction.reply({content: 'Acknowledged.', ephemeral: true});
    },
};

