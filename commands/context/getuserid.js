const { ContextMenuCommandBuilder, ApplicationCommandType, MessageFlags} = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
    .setName('Get User ID')
    .setType(ApplicationCommandType.User),
    async execute(interaction) {
        console.log(`Target ID: ${interaction.targetID}`);
        console.log(`Target Member: ${interaction.targetMember}`);
        console.log(`Target User: ${interaction.targetUser}`);
        console.log(`User: ${interaction.user}`);

        //let message = MessagePayload.create(interaction.user,`The targeted user's ID is ${interaction.TargetID}`);

        let parseme = String(interaction.targetUser);
        let parsedid = parseme.substring(parseme.indexOf("@")+1,parseme.lastIndexOf(">"));

        await interaction.user.send(`The targeted user's ID is ${parsedid}`);
        await interaction.reply({content: "ID Issued to your DM's", flags: MessageFlags.Ephemeral});
        //await interaction.reply('Command run successfully.');
        //console.log(interaction);
    }
}