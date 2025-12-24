import Link from 'next/link';
import Image from 'next/image';

import videoStyles from './VideoCard.module.scss';

export interface VideoCardProps {
    videoUrl: string;

    title: string;

    channelName: string;

    previewUrl: string;
    avatarUrl: string;
}

export default function VideoCard({
    videoUrl,

    title,
    channelName,

    previewUrl,
    avatarUrl,
}: VideoCardProps) {
    return (
        <Link
            href={videoUrl}
            prefetch={false}
            className={videoStyles['video-item']}
        >
            <Image src={previewUrl} alt='' width={400} height={225} />

            <div className={videoStyles['info-block']}>
                <Image
                    src={avatarUrl}
                    alt=''
                    width={36}
                    height={36}
                    className={videoStyles['avatar']}
                />
                <div className={videoStyles['text-block']}>
                    <p className={videoStyles['title']}> {title} </p>

                    <span className={videoStyles['channel-name']}>
                        {channelName}
                    </span>
                </div>
            </div>
        </Link>
    );
}
