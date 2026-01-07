import VideoPlayer from './components/VideoPlayer';

import videoStyles from './VideoMain.module.scss';

export default function VideoMain() {
    return (
        <div className={videoStyles['video-main']}>
            <VideoPlayer videoUrl={'/__test-video.mp4'} />
        </div>
    );
}
