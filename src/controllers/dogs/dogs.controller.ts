import { Get, Request, Post } from '@agio/framework/http';
import { Controller, Injectable } from '@agio/framework/common';
import { DogValidator } from './validators/dog.validator';
import { DogBreedValidator } from './validators/dog-breed.validator';
import { DogsService } from '../../services/dogs/dogs.service';

@Controller('dogs')
@Injectable()
export class DogsController {

    constructor(private dogsService: DogsService) {}

    /**
     * Return all dogs
     *
     * @param req
     */
    @Get('/')
    public readAll = async (req: Request) => req.sendResponse(await this.dogsService.getAll());


    /**
     * Access specific dog by ID
     *
     * @param req
     */
    @Get('/:id')
    public async readOne(req: Request) {

        const dog = await this.dogsService.getDogById(req.params.id);

        req.sendResponse(dog, dog ? HTTP_STATUS.OK : HTTP_STATUS.NOT_FOUND);

    }


    /**
     * Create new dog
     *
     * @param req
     */
    @Post('/', [DogValidator])
    public async create(req: Request) {

        const dog = await this.dogsService.createDog(req.body);

        req.sendResponse(dog, dog ? HTTP_STATUS.CREATED : HTTP_STATUS.INTERNAL_SERVER_ERROR);

    }


    /**
     * Create new dog breed
     *
     * @param req
     */
    @Post('/breed', [DogBreedValidator])
    public async createBreed(req: Request) {

        const breed = await this.dogsService.createBreed(req.body);

        req.sendResponse(breed, breed ? HTTP_STATUS.CREATED : HTTP_STATUS.INTERNAL_SERVER_ERROR);

    }


}