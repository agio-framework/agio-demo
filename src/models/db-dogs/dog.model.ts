import { SQLSchema, SQLDataTypes } from "@agio/framework/database";

@SQLSchema(
    'Dogs',
    {
        id: {
            type: SQLDataTypes.UUID,
            primaryKey: true,
            defaultValue: SQLDataTypes.UUIDV4,
        },
        name: {
            type: SQLDataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: true,
        comment: 'Dogs list',
        associations: {
            belongsTo: [
                {
                    as: 'breed',
                    model: 'DogBreeds',
                    onDelete: 'RESTRICT',
                    foreignKeyConstraint: true,
                }
            ],
        }
    }
)
export class LogModel {

    public method() {
        console.log('Eu sou um método de instância');
    }

    public static method() {
        console.log('Eu sou um método estático');
    }

}