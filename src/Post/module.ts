import { Module } from '@nestjs/common';
import { PostController } from './controllers';
import { PostService } from './services';

import { Posts } from '../database/schema/post'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
//   exports: [PostService],
  controllers: [PostController],
  providers: [PostService],
})

export class PostModule {}
