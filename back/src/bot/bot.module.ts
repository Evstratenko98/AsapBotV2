import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotService } from './bot.service';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: 'TELEGRAM_BOT_TOKEN',
    }),
  ],
  exports: [TelegrafModule],
  providers: [BotService],
})
export class BotModule {}
