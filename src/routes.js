import inline from './models/inline';
import wrapper from './models/wrapper';
import { TRACKING_PIXEL_BASE64 } from './constants';

export default {
    setup(app) {
        app.get('/inline', (req, res) => {
            let xml = inline.create();
            res.setHeader('Content-Type', 'text/xml');
            res.send(xml);
        });

        app.get('/wrapper', (req, res) => {
            let xml = wrapper.create(0);
            res.setHeader('Content-Type', 'text/xml');
            res.send(xml);
        });

        app.get('/wrapper/:deep', (req, res) => {
            let xml = wrapper.create(req.params.deep);
            res.setHeader('Content-Type', 'text/xml');
            res.send(xml);
        });

        app.get('/tracking/:name', (req, res) => {
            const image = new Buffer(TRACKING_PIXEL_BASE64, 'base64');
            res.setHeader('Content-Type', 'image/gif');
            res.setHeader('Content-Length', image.length);
            res.setHeader('Tracking-Name', req.params.name);

            res.send(image);
        });
    }
};
