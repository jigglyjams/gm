import { Client, Intents, Permissions, MessageEmbed } from 'discord.js';
import { keys } from '../keys.js';

const discord = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const CHANNEL = ''
const MSG = ''

discord.once('ready', async c => {
  console.log(`Ready! Logged in as ${c.user.tag}`);

  try {
    const channel = await c.channels.fetch(CHANNEL);

    // Get and log channel permissions
    const channelPermissions = channel.permissionsFor(c.user);
    console.log('Channel permissions:', channelPermissions.toArray());

    const botHasPermish = channel.permissionsFor(c.user).has(
      Permissions.FLAGS.READ_MESSAGE_HISTORY&&
      Permissions.FLAGS.ADD_REACTIONS);
    console.log(botHasPermish)

    const message = await channel.messages.fetch(MSG);
    await message.react('👍');
  } catch (error) {
    console.error('Error:', error);
  }
});

discord.login(keys.DISCORD_KEY);
