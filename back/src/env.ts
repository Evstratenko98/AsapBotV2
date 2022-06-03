import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';
import { CommentEntity } from './comment/entities/comment.entity';
import { PhotoEntity } from './photo/entities/photo.entity';
import { PostEntity } from './post/entities/post.entity';
import { UserEntity } from './user/entities/user.entity';

const dbEntities = [UserEntity, PostEntity, PhotoEntity, CommentEntity];

const { env } = process;

export const ARR_PORT = parseInt(env.BACK_APP_PORT);

export const ormOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: env.DB_HOST,
  port: parseInt(env.DB_PORT),
  username: env.DB_NAME,
  password: env.DB_USER,
  database: env.DB_PASS,
  entities: dbEntities,
  // namingStrategy: new SnakeNamingStrategy(),
  // migrations: ['migrations/*.ts'],
  // cli: { migrationsDir: 'migrations' },
  synchronize: true,
  // logging: ['query'],
};

// export const redisoptions: RedisModuleOptions = {
//   url: env.REDIS_URL,
// };
