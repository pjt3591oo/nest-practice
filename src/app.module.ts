import { Module, NestModule, MiddlewareConsumer  } from '@nestjs/common';

import { PostModule } from './post/module';
import { PostController } from './post/controllers';

import { LoggerMiddleware } from './common/middleware/logger'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Posts } from './database/schema/post'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'test',
      entities: [Posts],
      synchronize: true
    }),
    PostModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes('post')
      .forRoutes(PostController) 
  }
}
