import { MongoSchema } from '@agio/framework/database';

@MongoSchema(
    'Owners',
    {
        name: {
            type: String,
            required: true,
            lowercase: true,
            minlength: 3
        },
        city: {
            type: String,
            lowercase: true,
        }
    },
    {
        timestamps: true,
        collection: 'Owners'
    }
)
export class OwnerModel {}