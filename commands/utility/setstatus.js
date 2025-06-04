const { ActivityType, PresenceUpdateStatus, SlashCommandBuilder, MessageFlags} = require('discord.js');  // the discord.js library

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updatebotstatus')
        .setDescription('Updates Bots Rich Presence and More...'),
    async execute(interaction) {
        // client.user.setStatus(PresenceUpdateStatus.Idle);
        // client.user.setActivity('Visual Studio Code', { type: ActivityType.Playing });
        interaction.client.user.setPresence({ activities: [{ name: 'VisualStudioCode', type: ActivityType.Playing}], status: PresenceUpdateStatus.Idle });
        interaction.client.user.setUsername('Maya\'to Sin');
        interaction.client.user.setAvatar('res/rin-bot-profile.png');
        await interaction.reply({ content: 'Bot Status has been successfully updated.', flags: MessageFlags.Ephemeral } )
    }
}