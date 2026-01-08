import VideoPlayer from './components/VideoPlayer';
import VideoInfo from './components/VideoInfo';

import videoStyles from './VideoMain.module.scss';

export default function VideoMain() {
    return (
        <div className={videoStyles['video-main']}>
            <VideoPlayer videoUrl={'/__test-video.mp4'} />

            <VideoInfo title='__exampleChannel - __example__' />
        </div>
    );
}
