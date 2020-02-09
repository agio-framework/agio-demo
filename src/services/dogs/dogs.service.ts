import { SQLModel, Model, MongoModel } from '@agio/framework/database';

import { IDogBreed } from '../../interfaces/dogs/dog-breed.interface';
import { IDog } from '../../interfaces/dogs/dog.interface';

export class DogsService {


    @Model('db-dogs', 'DogBreeds')
    public dogBreedsModel: SQLModel<IDogBreed>;


    @Model('db-dogs', 'Dogs')
    private dogModel: SQLModel<IDog>;


    @Model('db-owner', 'Owners')
    private dogOwner: MongoModel<any>;


    /**
     * Return all dogs including your breed
     */
    public getAll = () => this.dogModel.findAll({
        include: [{
            model: this.dogBreedsModel,
            as: 'breed'
        }]
    });


    /**
     * Return specific dog by your id including your breed
     */
    public async getDogById(dogId: string) {

        const dog = await this.dogModel.findByPk(dogId, {
            include: [{
                model: this.dogBreedsModel,
                as: 'breed'
            }]
        });

        if (!dog) return;
        else if (dog.ownerId) dog.setDataValue('owner', await this.dogOwner.findById(dog.ownerId, ['name', 'city']))

        return dog;

    };


    /**
     * Create a new dog
     */
    public createDog = (dog: IDog) => this.dogModel.create(dog);


    /**
     * Create a new dog bread
     */
    public createBreed = (dogBreed: IDogBreed) => this.dogBreedsModel.create(dogBreed);


}