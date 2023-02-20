import { Bot } from './bot';
import { Scheduler } from './scheduler';
import { Users } from './users';

// Load environment variables from .env file
require('dotenv').config();

// Create instances of bot, scheduler, and users
const bot = new Bot(process.env.BOT_TOKEN);
const scheduler = new Scheduler();
const users = new Users();

// Start the bot
bot.start();

// Set up the schedule to select a user each day and send a notification
scheduler.start(users, (user) => {
  bot.sendMessage(`Today's person on duty is ${user.username}`);
});