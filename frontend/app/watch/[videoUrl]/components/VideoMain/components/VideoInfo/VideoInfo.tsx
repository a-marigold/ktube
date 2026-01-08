import infoStyles from './VideoInfo.module.scss';

interface VideoInfoProps {
    title: string;
}
export default function VideoInfo({ title }: VideoInfoProps) {
    return (
        <div className={infoStyles['video-info']}>
            <h1 className={infoStyles['title']}> {title} </h1>
        </div>
    );
}
