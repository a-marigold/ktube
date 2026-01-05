import VideoList from './components/VideoList';

import watchStyles from './Watch.module.scss';

export default function WatchPage() {
    return (
        <div className={watchStyles['watch-page']}>
            <VideoList />
        </div>
    );
}
