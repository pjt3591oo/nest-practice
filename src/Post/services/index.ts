import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Posts } from '../../database/schema/post'

@Injectable()
export class PostService {
  constructor (
    @InjectRepository(Posts) 
    private readonly postRepository: Repository<Posts>
  ){}

  getPost(): Promise<Posts[]> {
    let posts = this.postRepository.find()

    return posts;
  }

  getTest(): any {
    console.log('test')
  }
}
