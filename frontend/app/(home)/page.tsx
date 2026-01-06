import VideoBox from './components/VideoBox';

import homeStyles from './Home.module.scss';

export default function Home() {
    return (
        <main className={homeStyles['home-page']}>
            <VideoBox />
        </main>
    );
}
