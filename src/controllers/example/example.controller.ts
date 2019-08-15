import { Get, Request } from '@agio/framework/http';
import { Controller, Injectable } from '@agio/framework/common';
import { ExampleService } from '../../services/example/example.service';
import { ExampleMiddleware } from '../../middlewares/example.middleware'
import { ExampleValidator } from './validators/example.validator';

@Controller('example')
@Injectable()
export class ExampleController {

    constructor(private exampleService: ExampleService) {}

    @Get('/', [ExampleValidator, ExampleMiddleware])
    public async readAll(req: Request) {

        const message = this.exampleService.getExampleMessage(req.query.name);

        req.sendResponse(
            {
                message,
                nameLength: req.query.name.length
            }
        );

    }


}