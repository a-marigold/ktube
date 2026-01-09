import ReactionBlock from './components/ReactionBlock/ReactionBlock';

import infoStyles from './VideoInfo.module.scss';

interface VideoInfoProps {
    title: string;
}
export default function VideoInfo({ title }: VideoInfoProps) {
    return (
        <div className={infoStyles['video-info']}>
            <h1 className={infoStyles['title']}> {title} </h1>

            <ReactionBlock
                channelName='__channel__'
                avatarUrl='/__test-avatar.png'
                subsriptions={20000}
                likes={820}
                disLikes={320}
                views={1000}
                publishDate={Date.now()}
            />
        </div>
    );
}
