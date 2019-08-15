import { object, string } from 'joi';
import { Validator } from '@agio/framework/common';

@Validator()
export class ExampleValidator {

    // Validate the req.body attribute
    public get body() {

        return object({
            myBodyAttribute: string()
        });

    }

    // Validate req.query attribute
    public get query() {

        return object({
            name: string().required().max(10)
        })
        
    }

}