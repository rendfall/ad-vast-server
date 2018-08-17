import inline from './models/inline';
import wrapper from './models/wrapper';

export default {
    setup(app) {
        app.get('/inline', (req, res) => {
            let xml = inline.create();
            res.setHeader('content-type', 'text/xml');
            res.send(xml);
        });

        app.get('/wrapper', (req, res) => {
            let xml = wrapper.create(0);
            res.setHeader('content-type', 'text/xml');
            res.send(xml);
        });

        app.get('/wrapper/:deep', (req, res) => {
            let xml = wrapper.create(req.params.deep);
            res.setHeader('content-type', 'text/xml');
            res.send(xml);
        });

        app.get('/tracking/:name', (req, res) => {
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify({
                status: res.statusCode,
                tracking: req.params.name
            }, null, 4));
        });
    }
};
