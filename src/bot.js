require('dotenv').config();
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const { token } = process.env;
const client = new Client({ intents: GatewayIntentBits.Guilds });

client.commands = new Collection();
client.commandsArray = [];

const functionFolders = fs.readdirSync('./src/functions').filter((folder) => {
    const path = `./src/functions/${folder}`;
    return fs.lstatSync(path).isDirectory();
  });
  
  for (const folder of functionFolders) {
    const functionFiles = fs
      .readdirSync(`./src/functions/${folder}`)
      .filter((file) => file.endsWith('.js'));
  
    for (const file of functionFiles) {
      require(`./functions/${folder}/${file}`)(client);
    }
  }
  

client.handleEvents();
client.handleCommands();
client.login(token);
