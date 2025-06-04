const { ActivityType, PresenceUpdateStatus, Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        client.user.setPresence({ activities: [{ name: 'Visual Studio Code', type: ActivityType.Streaming, state: 'Self Replicating', url: "https://www.youtube.com/watch?v=ek1eoXW0hDw"}], status: PresenceUpdateStatus.Idle });
        //client.user.setUsername('Maya\'s Bot');
        //client.user.setAvatar("rin-bot-profile.png");
        //client.user.setBanner("rin-bot-profile.png"); // Doesnt work, as expected
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};
