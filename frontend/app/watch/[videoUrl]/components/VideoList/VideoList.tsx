import VideoItem, { type VideoItemProps } from './components/VideoItem';

import listStyles from './VideoList.module.scss';

export default function VideoList() {
    const __testViedos: VideoItemProps[] = [
        {
            videoUrl: 'abcded',

            title: 'Video example',

            channel: 'Channel',

            views: 1600000,

            publishDate: 100000000,

            previewUrl: '/__test-preview.png',
        },
    ];

    return (
        <ul className={listStyles['video-list']}>
            {__testViedos.map((props) => (
                <VideoItem key={props.videoUrl} {...props} />
            ))}
        </ul>
    );
}
