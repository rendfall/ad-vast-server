import * as xml from 'xmlbuilder';

import { URLS } from '../constants';

function buildExtensions() {
    const extensionsDocument = xml.create('Extensions');

    extensionsDocument
        .ele('Extension', { type: 'activeview' })
            .ele('CustomTracking')
            .ele('Tracking', { event: 'viewable_impression' })
                .dat(URLS.CUSTOM_TRACKING.VIEWABLE_IMPRESSION)
                .up()
            .ele('Tracking', { event: 'abandon' })
                .dat(URLS.CUSTOM_TRACKING.ABANDON)
                .up();

    extensionsDocument
        .ele('Extension', { type: 'geo' })
            .ele('Country')
                .txt('PL')
                .up()
            .ele('Bandwidth')
                .txt(4)
                .up()
            .ele('BandwidthKbps')
                .txt(20000)
                .up();

    extensionsDocument
        .ele('Extension', { 
            type: 'pod',
            sequence: 1,
            max_fallback_attempts: 2
        });

    return extensionsDocument;
}

export default {
    build() {
        return buildExtensions();
    }
};
