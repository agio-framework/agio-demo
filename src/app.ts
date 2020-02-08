import { App } from '@agio/framework/core';
import { DogsController } from './controllers/dogs/dogs.controller';

const app = new App(
    {
        controllers: [
            DogsController,
        ]
    }
);


app.start()
    .then((message) => console.info(message))
