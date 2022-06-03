import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity } from './entities/user.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import { CommentEntity } from 'src/comment/entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PostEntity, CommentEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
