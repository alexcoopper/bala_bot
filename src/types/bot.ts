import { Context } from 'telegraf';

declare module 'telegraf' {
  interface Context {
    replyWithMarkdown(text: string): Promise<void>;
    replyWithHTML(text: string): Promise<void>;
  }
}