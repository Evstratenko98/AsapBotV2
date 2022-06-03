import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { CommentEntity } from './entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, UserEntity, CommentEntity])],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
