import { Injectable, NestMiddleware} from '@nestjs/common'
import { Request, Response } from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log('>>>> logger1 <<<<')
        console.log('>>>> logger2 <<<<')
        console.log('>>>> logger3 <<<<')

        next()
    }
}
