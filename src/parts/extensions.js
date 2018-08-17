import * as xml from 'xmlbuilder';

import { URLS } from '../constants';

function buildExtensions() {
    return xml.create('Extensions')
        .ele('Extension', { type: 'activeview' })
            .ele('CustomTracking')
                .ele('Tracking', { event: 'viewable_impression' })
                    .dat(URLS.CUSTOM_TRACKING.VIEWABLE_IMPRESSION)
                    .up()
                .ele('Tracking', { event: 'abandon' })
                    .dat(URLS.CUSTOM_TRACKING.ABANDON)
                    .up()
                .ele('Extension', { type: 'geo' })
                    .ele('Country')
                        .txt('PL')
                        .up()
                    .ele('Bandwidth')
                        .txt(4)
                        .up()
                    .ele('BandwidthKbps')
                        .txt(20000)
                        .up()
                    .ele('Extension', {
                        type: 'pod',
                        sequence: 1,
                        max_fallback_attempts: 2
                    })
                    .up()
                .up()
            .up()
        .up();
}

export default {
    build() {
        return buildExtensions();
    }
};
