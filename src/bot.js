require('dotenv').config();
const{token} = process.env;
const {clint, collection, GatewayIntentBits, Collection} = require('discord.js');
const fs = require('fs');

const client  = client({intents: GatewayIntentBits.Guild});
client.commands = new Collection();

const functionFolders = fs.readdirSync('./src/functions');

for (const folder of functionFolders){
    const functionFiles = fs.readdirSync('./src/functions/${folder}')
    .filter(file => file.endsWith('.js'));

for (const file of functionFiles)
    require('./functions/${folder}/${file}')(client)
}