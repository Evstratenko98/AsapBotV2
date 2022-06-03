import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { PostEntity } from 'src/post/entities/post.entity';
import { PhotoEntity } from './entities/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, PhotoEntity])],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
