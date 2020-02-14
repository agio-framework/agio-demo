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
        bornAt: {
            type: SQLDataTypes.DATE,
            allowNull: true,
        },
        ownerId: {
            type: SQLDataTypes.STRING,
            allowNull: true,
            validate: {
                is: /^[0-9a-fA-F]{24}$/
            }
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
export class LogModel {}
