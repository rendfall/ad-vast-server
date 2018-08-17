import { BASE_URL } from './constants';

export default [
    {
        title: '100293_Kaufland_Wizerunek_FILM_1_v2 ad',
        description: 'Lorem ipsum dolor sit amet',
        duration: '00:00:30',
        mediaFiles: [{
            id: 'MediaFile name',
            delivery: 'progressive',
            width: 426,
            height: 240,
            type: 'video/mp4',
            bitrate: 256,
            scalable: true,
            maintainAspectRatio: true,
            src: `${BASE_URL}/media/ad.mp4`
        }]
    }
];
