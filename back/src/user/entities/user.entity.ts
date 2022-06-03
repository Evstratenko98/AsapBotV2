import { CommentEntity } from 'src/comment/entities/comment.entity';
import { PostEntity } from 'src/post/entities/post.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

export const TABLE_NAME = 'users';

@Entity(TABLE_NAME)
export class UserEntity {
  @Column({
    nullable: false,
  })
  public id: string;

  @Column({
    nullable: false,
  })
  public isBot: boolean;

  @Column({
    nullable: true,
  })
  public firstName: string;

  @Column({
    nullable: true,
  })
  public lastName: string;

  @Column({
    nullable: true,
  })
  public username: string;

  @Column({
    nullable: true,
  })
  public languageCode: string;

  @Column({
    default: false,
    nullable: false,
  })
  public banned: boolean;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  public bannedAt: Date;

  @DeleteDateColumn()
  public deletedAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;

  @CreateDateColumn()
  public createAt: Date;

  @OneToMany(() => PostEntity, (post) => post.userId)
  public posts: PostEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.userId)
  public comments: CommentEntity[];
}
