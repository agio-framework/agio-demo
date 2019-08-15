import { App } from '@agio/framework/core';
import { ExampleController } from './controllers/example/example.controller';

const app = new App(
    {
        controllers: [
            ExampleController
        ]
    }
);


app.start()
    .then((message) => console.info(message))
