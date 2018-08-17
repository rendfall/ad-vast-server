import uuid from 'uuid';

import appConfig from './config';

export function buildAppAddress() {
    const { protocol, host, port } = appConfig;
    return `${protocol}://${host}:${port}`;
}

export function generateID() {
    return uuid();
}
