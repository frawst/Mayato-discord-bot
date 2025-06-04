const { ActivityType, PresenceUpdateStatus, SlashCommandBuilder, MessageFlags} = require('discord.js');  // the discord.js library
const { BOT_NAME, BOT_PROFILE_PICTURE_PATH, BOT_ACTIVITY_NAME } = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('updatebotstatus')
        .setDescription('Updates Bots Rich Presence and More...'),
    async execute(interaction) {
        interaction.client.user.setPresence(
            {
                activities: [
                    {
                        name: BOT_ACTIVITY_NAME,
                        type: ActivityType.Streaming
                    }],
                status: PresenceUpdateStatus.Idle
            });

        interaction.client.user.setUsername(BOT_NAME);
        interaction.client.user.setAvatar(BOT_PROFILE_PICTURE_PATH);
        
        await interaction.reply(
            {
                content: 'Bot Status has been successfully updated.',
                flags: MessageFlags.Ephemeral 
            })
    }
}