import * as xml from 'xmlbuilder';

import { URLS } from '../constants';

function buildVideoClicks() {
    return xml.create('VideoClicks')
        .ele('ClickTracking', { id: 'ClickTracking Name' })
            .dat(URLS.VIDEO_CLICKS.CLICK_TRACKING)
            .up()
        .ele('ClickThrough', { id: 'ClickThrough Name' })
            .dat(URLS.VIDEO_CLICKS.CLICK_THROUGH)
}

export default {
    build() {
        return buildVideoClicks();
    }
};
