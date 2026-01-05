import VideoItem from './components/VideoItem';

import listStyles from './VideoList.module.scss';

export default function VideoList() {
    const __testViedos: unknown[] = [];

    return (
        <li className={listStyles['video-list']}>
            {__testViedos.map(() => (
                <li key={'__key'}>
                    <VideoItem />
                </li>
            ))}
        </li>
    );
}
