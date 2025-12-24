import VideoCard from './components/VideoCard';

//  TODO: temporarily
import type { VideoCardProps } from './components/VideoCard/VideoCard';

import videoStyles from './VideoList.module.scss';

export default function VideoList() {
    const __test_list__: VideoCardProps[] = [
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
        {
            videoUrl: '1',
            title: 'Example videossssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            channelName: 'Channel',

            previewUrl: '/__test-preview.png',
            avatarUrl: '/__test-avatar.png',

            videoViews: 600,
        },
    ];

    return (
        <div className={videoStyles['video-list']}>
            {__test_list__.map((videoProps) => (
                <VideoCard key={videoProps.videoUrl} {...videoProps} />
            ))}
        </div>
    );
}
