import ReactionBlock from './components/ReactionBlock';
import Description from './components/Description';

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
                channelUrl='/@__c'
                subsriptions={20000}
                likes={820}
                disLikes={320}
            />

            <Description
                views={1000000}
                publishDate={Date.now() - Date.now() / 2}
                descriptionContent='conten'
            />
        </div>
    );
}
