import { PostEntity } from 'src/post/entities/post.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export const TABLE_NAME = 'photo';

@Entity(TABLE_NAME)
export class PhotoEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
  })
  path: string;

  @DeleteDateColumn()
  public deletedAt: Date;

  @DeleteDateColumn()
  public updateAt: Date;

  @DeleteDateColumn()
  public createAt: Date;

  @ManyToOne(() => PostEntity, (post) => post.photos)
  public postId: PostEntity;
}
