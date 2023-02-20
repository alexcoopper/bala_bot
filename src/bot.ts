import { Telegraf } from 'telegraf';

export class Bot {
  private bot: Telegraf;

  constructor(token: string) {
    this.bot = new Telegraf(token);
  }

  public start(): void {
    this.bot.start((ctx) => ctx.reply('Welcome to the Balanenko family assistant bot!'));
    this.bot.help((ctx) => ctx.reply('This bot is here to help you keep track of who is on duty each day.'));
    this.bot.launch();
  }

  public sendMessage(message: string): void {
    this.bot.telegram.sendMessage(process.env.CHAT_ID, message);
  }
}