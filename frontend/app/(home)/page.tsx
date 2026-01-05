import VideoList from './components/VideoList';

import homeStyles from './Home.module.scss';

export default function Home() {
    return (
        <main className={homeStyles['home-page']}>
            <VideoList />
        </main>
    );
}
