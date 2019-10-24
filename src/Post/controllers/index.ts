import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { PostService } from '../services';
import { Request, Response } from 'express'

import { CreatePostDot } from '../dto/normal'
import  {Posts} from '../../database/schema/post'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getHello(): Promise<Posts[]> {
    let a = this.postService.getPost()
    console.log(a)
    return a
  }

  @Post()
  getTest(@Body() createPostDot:CreatePostDot, @Req() req:Request, @Res() res:Response): void  {
    console.log(createPostDot)
    res.status(200).json(createPostDot)
  }
}
