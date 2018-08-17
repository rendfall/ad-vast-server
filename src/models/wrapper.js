import * as xml from 'xmlbuilder';

import { BASE_URL, URLS} from '../constants';
import { generateID } from '../utils';

import TrackingEvents from '../parts/tracking-events';
import VideoClicks from '../parts/video-clicks';
import Extensions from '../parts/extensions';

function getVASTAdTagURI(depth) {
    return (depth > 0)
        ? `${BASE_URL}/wrapper/${depth - 1}`
        : `${BASE_URL}/inline`;
}

let trackingEvents = TrackingEvents.build();
let videoClicks = VideoClicks.build();
let extensions = Extensions.build();

export default {
    create(depth) {
        return xml.begin().ele('VAST', { version: '3.0' })
            .ele('Ad', { id: generateID() })
                .ele('Wrapper')
                    .ele('AdSystem')
                        .txt('AdSystem Name')
                        .up()
                    .ele('VASTAdTagURI')
                        .dat(getVASTAdTagURI(depth))
                        .up()
                    .ele('Error')
                        .dat(URLS.ERROR)
                        .up()
                    .ele('Impression')
                        .dat(URLS.IMPRESSION)
                        .up()
                    .ele('Creatives')
                        .ele('Creative', { 
                            id: generateID(), 
                            sequence: 1
                        })
                            .ele('Linear')
                                .ele('Duration')
                                    .txt('00:00:29')
                                    .up()
                            .importDocument(trackingEvents)
                            .importDocument(videoClicks)
                        .up()
                    .up()
                .importDocument(extensions)
            .up()
        .end({ pretty: true });
    } 
};
