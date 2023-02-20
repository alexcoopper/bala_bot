import { Telegraf, Context } from 'telegraf';
import { onDutyNotification } from './notifications';
import { getCurrentDuty, users } from './users';
const nodeCron = require("node-cron");

export class Bot {
  private bot: Telegraf;

  constructor(token: string) {
    this.bot = new Telegraf(token);
  }

  public start(): void {
    this.bot.start((ctx) => ctx.reply('Вітаю, я бот-асистент сімї Баланенко!'));
    this.bot.help((ctx) => ctx.reply('Цей бот робить нагадування нам.'));
    this.bot.command('duty', (ctx: Context) => {
        const chatId = ctx.message?.chat.id || 0;
        ctx.telegram.sendMessage(chatId, this.OnDutyNotification());
      });

    this.bot.command('notify', (ctx: Context) => {
      nodeCron.schedule('* 30 10 * * *', () => {
          const message = `Привіт, це дейлі нагадування!.
          ${this.OnDutyNotification()}`;
      
          const chatId = ctx.message?.chat.id || 0;
          this.bot.telegram.sendMessage(chatId, message);
      });
    });

    this.bot.launch();
  }

  private OnDutyNotification(): string {
    const currentDuty = getCurrentDuty();
    const second = users.find(x=> x.id != currentDuty.id)?.name || "";
    return onDutyNotification(currentDuty.name, second);
  }
}



  