import { CommentEntity } from 'src/comment/entities/comment.entity';
import { PhotoEntity } from 'src/photo/entities/photo.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export const TABLE_NAME = 'post';

@Entity(TABLE_NAME)
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
  })
  city: string;

  //TODO: Сделать енум для выбора категорий
  @Column({
    nullable: true,
  })
  category: string;

  @Column({
    nullable: true,
  })
  description: string;

  @DeleteDateColumn()
  public deletedAt: Date;

  @UpdateDateColumn()
  public updateAt: Date;

  @CreateDateColumn()
  public createAt: Date;

  @OneToMany(() => CommentEntity, (comment) => comment.userId)
  public comments: CommentEntity[];

  @OneToMany(() => PhotoEntity, (photo) => photo.postId)
  public photos: PhotoEntity[];

  @ManyToOne(() => UserEntity, (user) => user.posts)
  public userId: UserEntity;
}
