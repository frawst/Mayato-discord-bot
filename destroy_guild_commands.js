const { REST, Routes } = require('discord.js');
const { APP_ID, GUILD_ID, DISCORD_TOKEN } = require('./config.json');

const rest = new REST().setToken(DISCORD_TOKEN);

// delete test server commands

rest.put(Routes.applicationGuildCommands(APP_ID, GUILD_ID), { body: [] })
    .then(() => console.log('Deleted all guild commands.'))
    .catch(console.error);