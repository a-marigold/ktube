import VideoCard from './components/VideoCard';

//  TODO: temporarily
import type { VideoCardProps } from './components/VideoCard/VideoCard';

import videoStyles from './VideoList.module.scss';

export default function VideoList() {
    const __test_list__: VideoCardProps[] = [
        {
            videoUrl: '',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',
            previewUrl: '',
            avatarUrl: '',
        },
    ];

    return (
        <div className={videoStyles['video-list']}>
            {__test_list__.map((videoProps) => (
                <VideoCard {...videoProps} />
            ))}
        </div>
    );
}
