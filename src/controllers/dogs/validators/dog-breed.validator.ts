import { Validator, ValidatorSchema } from '@agio/framework/validator';

@Validator({
    provideTo: 'request',
    validate: ['body']
})
export class DogBreedValidator {

    public body: ValidatorSchema = {
        name: {
            type: String,
            required: true,
        },
    }
}