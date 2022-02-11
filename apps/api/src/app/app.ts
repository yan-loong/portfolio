import * as express from 'express';
import config from '../configs/config'
import apiRouter from './routers/api-common.router'

const app = express();

// Midlwares
app.use(express.json());


// Implement API Router
app.use('/api', apiRouter)

export default function startAPIServer(port = config.API_PORT) {
    const server = app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}/api`);
    });
}