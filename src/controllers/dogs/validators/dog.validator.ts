import { Validator, ValidatorSchema } from '@agio/framework/validator';

@Validator({
    provideTo: 'request',
    validate: ['query', 'body']
})
export class DogValidator {

    public query: ValidatorSchema = {
        name: {
            type: String,
            max: 100
        }
    } 

    public body: ValidatorSchema = {
        bornAt: {
            type: Date,
            less: 'now',
        },
        name: {
            type: String,
            required: true,
            max: 100,
        },
        breedId: {
            type: String,
            required: true,
            length: 36
        }
    }
}