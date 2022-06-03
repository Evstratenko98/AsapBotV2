import { PostEntity } from 'src/post/entities/post.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export const TABLE_NAME = 'comment';

@Entity(TABLE_NAME)
export class CommentEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
  })
  text: string;

  @DeleteDateColumn()
  public deletedAt: Date;

  @DeleteDateColumn()
  public updateAt: Date;

  @DeleteDateColumn()
  public createAt: Date;

  @ManyToOne(() => PostEntity, (post) => post.comments)
  public postId: PostEntity;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  public userId: UserEntity;
}
