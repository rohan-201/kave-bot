const fs = require('fs')

module.exports = (client) => {
    client.handdleCommands = async() => {
        const eventsFolders = fs.readddirSync('./src/events');
        for (const folder of eventsFolders){
            const eventFiles = fs.readddirSync('./src/event/${folder}')
            .filter(file => file.endsWith('.js'));

          switch (folder) {
            case "client":
                for (const file of eventFiles){
                    const events = require('../../events/${foler}/${file}');
                    if (event.once) client.once(event.name, (...args) => events.execute(...args, client));
                    else client.on(event.name, (...args) => event.execute(...args, client));
                }
                
                break;
          
            default:
                break;
          }
        }

    };

};