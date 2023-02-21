const fs = require('fs');


module.exports = (client) => {
    client.handdleCommands = async() => {
        const commandFolders = fs.readdirSync('./src/commands')
        for (const folder of commandFolders) {
            const commandFiles = fs
               .readdirSync('./src/commands/${folder}')
               .filter((file) => file.endsWith('.js'));

            const { commands, commandArray } = client;
        for (const file of commandFiles){
            const command = require('../../commands/${folder}/${file}');
            command.set(command.data.name, command);
            commandArray.push(command, command.data.toJSON());
            

        }

        }
        
    };
};