import { Bot } from './bot';
// Load environment variables from .env file
require('dotenv').config();

// Create instances of bot, scheduler, and users
const bot = new Bot(process.env.BOT_TOKEN || "");

// Start the bot
bot.start();

