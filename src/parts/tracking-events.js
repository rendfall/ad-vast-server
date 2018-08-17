import * as xml from 'xmlbuilder';

import { URLS} from '../constants';

function buildTrackings() {
    const trackingDocument = xml.create('TrackingEvents');

    Object.entries(URLS.TRACKING_EVENTS)
        .forEach(([name, url]) => {
            trackingDocument
                .ele('Tracking', { event: name })
                    .dat(url);
        });

    return trackingDocument;
}

export default {
    build() {
        return buildTrackings();
    }
};
