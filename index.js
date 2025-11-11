const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () => {
  console.log(`Bot aktif sebagai ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("Pong!");
  }
});

client.login(process.env.MTQzNzc3OTM4NjU1NTE3NDkyMw.GV-K7p.FIDFi6pzVmlZ3U9fp7HI96RE9n5cAhCaelI1H0);