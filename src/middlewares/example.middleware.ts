import { Middleware } from '@agio/framework/common';
import { Request, NextFunction, Response} from '@agio/framework/http';

export class ExampleMiddleware implements Middleware {

    public use(req: Request, res: Response, next: NextFunction) {

        // Enter your code here

        next();
    }

}