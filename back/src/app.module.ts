import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { PhotoModule } from './photo/photo.module';
import { PostModule } from './post/post.module';
import { ormOptions } from './env';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot(ormOptions),
    BotModule,
    UserModule,
    CommentModule,
    PhotoModule,
    PostModule,
  ],
  providers: [],
})
export class AppModule {}
