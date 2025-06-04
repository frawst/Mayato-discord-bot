const { ActivityType, PresenceUpdateStatus, Events } = require('discord.js');
const { BOT_NAME, BOT_PROFILE_PICTURE_PATH, BOT_ACTIVITY_NAME, BOT_STREAM_LINK } = require('config.json');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        client.user.setPresence(
            {
                activities: [
                    {
                        name: BOT_ACTIVITY_NAME,
                        type: ActivityType.Streaming,
                        url: BOT_STREAM_LINK 
                    }],
                status: PresenceUpdateStatus.Idle
            });
        //client.user.setUsername(BOT_NAME);
        //client.user.setAvatar(BOT_PROFILE_PICTURE_PATH);
        //client.user.setBanner("rin-bot-profile.png"); // Doesnt work, as expected
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};
