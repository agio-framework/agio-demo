import { SQLSchema, SQLDataTypes } from '@agio/framework/database';

@SQLSchema(
    'DogBreeds',
    {
        id: {
            type: SQLDataTypes.UUID,
            primaryKey: true,
            defaultValue: SQLDataTypes.UUIDV4,
        },
        name: {
            type: SQLDataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false,
        comment: 'Dog breed list',
    },
)
export class LogTypesModel {}
