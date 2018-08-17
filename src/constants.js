import { buildAppAddress } from './utils';

export const BASE_URL = buildAppAddress();

export const URLS = {
    AD_SOURCE: `${BASE_URL}/media/ad.mp4`,

    WRAPPER: `${BASE_URL}/wrapper`,
    INLINE: `${BASE_URL}/inline`,

    ERROR: `${BASE_URL}/tracking/error`,
    IMPRESSION: `${BASE_URL}/tracking/impression`,

    TRACKING_EVENTS: {
        START: `${BASE_URL}/tracking/start`,
        FIRST_QUARTILE: `${BASE_URL}/tracking/firstQuartile`,
        MIDPOINT: `${BASE_URL}/tracking/midpoint`,
        THIRD_QUARTILE: `${BASE_URL}/tracking/thirdQuartile`,
        MUTE: `${BASE_URL}/tracking/mute`,
        UNMUTE: `${BASE_URL}/tracking/unmute`,
        REWIND: `${BASE_URL}/tracking/rewind`,
        PAUSE: `${BASE_URL}/tracking/pause`,
        RESUME: `${BASE_URL}/tracking/resume`,
        FULLSCREEN: `${BASE_URL}/tracking/fullscreen`,
        CREATIVE_VIEW: `${BASE_URL}/tracking/creativeView`,
        ACCEPT_INVITATION: `${BASE_URL}/tracking/acceptInvitation`,
        COMPLETE: `${BASE_URL}/tracking/complete`,
    },

    VIDEO_CLICKS: {
        CLICK_TRACKING: `${BASE_URL}/tracking/ClickTracking`,
        CLICK_THROUGH: `${BASE_URL}/tracking/ClickThrough`,
    },

    CUSTOM_TRACKING: {
        VIEWABLE_IMPRESSION: `${BASE_URL}/tracking/viewable_impression`,
        ABANDON: `${BASE_URL}/tracking/abandon`
    }
};

export const TRACKING_PIXEL_BASE64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+B/zHwAEvgJcOluBsgAAAABJRU5ErkJggg==';