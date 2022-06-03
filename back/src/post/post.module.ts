import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { UserEntity } from 'src/user/entities/user.entity';
import { PostEntity } from './entities/post.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';
import { PhotoEntity } from 'src/photo/entities/photo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      PostEntity,
      CommentEntity,
      PhotoEntity,
    ]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
