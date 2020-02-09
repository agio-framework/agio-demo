export interface IDog {

    id?: string;
    name: string;
    breedId: string;
    ownerId?: string;
    createdAt?: string;
    updatedAt?: string;
    owner?: {
        name: string;
        city: string;
    }

}