import { SQLModel, Model } from '@agio/framework/database';

import { IDogBreed } from '../../interfaces/dogs/dog-breed.interface';
import { IDog } from '../../interfaces/dogs/dog.interface';

export class DogsService {


    @Model('db-dogs', 'DogBreeds')
    public dogBreedsModel: SQLModel<IDogBreed>;


    @Model('db-dogs', 'Dogs')
    private dogModel: SQLModel<IDog>;


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
    public getDogById = (dogId: string) => this.dogModel.findByPk(dogId, {
        include: [{
            model: this.dogBreedsModel,
            as: 'breed'
        }]
    });


    /**
     * Create a new dog
     */
    public createDog = (dog: IDog) => this.dogModel.create(dog);


    /**
     * Create a new dog bread
     */
    public createBreed = (dogBreed: IDogBreed) => this.dogBreedsModel.create(dogBreed);


}