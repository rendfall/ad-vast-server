import * as xml from 'xmlbuilder';

import { URLS } from '../constants';
import { generateID } from '../utils';

import ads from '../ads';
import TrackingEvents from '../parts/tracking-events';
import VideoClicks from '../parts/video-clicks';
import Extensions from '../parts/extensions';

const trackingEventsDocument = TrackingEvents.build();
const videoClicksDocument = VideoClicks.build();
const extensionsDocument = Extensions.build();

function creteMediaFilesDoc(mediaFiles) {
    const mediaFilesDocument = xml.create('MediaFiles');

    mediaFiles.forEach((mediaFile) => {
        mediaFilesDocument.ele('MediaFile', {
            id: mediaFile.id,
            delivery: mediaFile.delivery,
            width: mediaFile.width,
            height: mediaFile.height,
            type: mediaFile.type,
            bitrate: mediaFile.bitrate,
            scalable: mediaFile.scalable,
            maintainAspectRatio: mediaFile.maintainAspectRatio
        }).dat(mediaFile.src);
    });

    return mediaFilesDocument;
}

export default {
    create() {
        const vastDocument = xml.begin()
            .ele('VAST', {'version': '3.0' });

        ads.forEach((ad) => {
            const mediaFilesDocument = creteMediaFilesDoc(ad.mediaFiles);

            vastDocument
                .ele('Ad', { id: generateID() })
                    .ele('InLine')
                        .ele('AdSystem')
                            .txt('AdSystem Name')
                            .up()
                        .ele('AdTitle')
                        .txt(ad.title)
                        .up()
                    .ele('Description')
                        .dat(ad.description)
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
                                .txt(ad.duration)
                                .up()
                            .importDocument(trackingEventsDocument)
                            .importDocument(videoClicksDocument)
                            .importDocument(mediaFilesDocument)
                            .up()
                        .up()
                    .up()
                .importDocument(extensionsDocument)
                .up()
        });

        return vastDocument.end({ pretty: true });
    } 
}
