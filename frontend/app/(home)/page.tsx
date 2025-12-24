import homeStyles from './Home.module.scss';
import VideoList from './components/VideoList';

export default function Home() {
    return (
        <div className={homeStyles['home-page']}>
            <VideoList />
        </div>
    );
}
