import express from 'express';
import { join as pathJoin } from 'path';

import appConfig from './config';
import routes from './routes';
import { buildAppAddress } from './utils';

const app = express();

app.use((req, res, next) => {
    const origin = req.headers['origin'] || buildAppAddress();

    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    next();
});

app.use('/media', express.static(pathJoin(__dirname, 'media')));

routes.setup(app);

app.listen(appConfig.port, () => {
    const { protocol, port, host } = appConfig;
    console.log(`Server is listening on ${protocol}://${host}:${port}`)
});
