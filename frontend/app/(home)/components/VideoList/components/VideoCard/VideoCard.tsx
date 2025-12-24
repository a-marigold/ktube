import Link from 'next/link';
import Image from 'next/image';

import videoStyles from './VideoCard.module.scss';

export interface VideoCardProps {
    videoUrl: string;

    title: string;

    channelName: string;

    previewUrl: string;
    avatarUrl: string;

    videoViews: number;
}

export default function VideoCard({
    videoUrl,

    title,
    channelName,

    previewUrl,
    avatarUrl,
    videoViews,
}: VideoCardProps) {
    return (
        <Link
            href={videoUrl}
            prefetch={false}
            className={videoStyles['video-item']}
        >
            <Image
                src={previewUrl}
                alt=''
                width={400}
                height={225}
                className={videoStyles['preview-image']}
            />

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

                    <div className={videoStyles['extra-info-block']}>
                        <span className={videoStyles['extra-info']}>
                            {videoViews} views
                        </span>
                    </div>
                </div>
            </div>
            <div className={videoStyles['scaling-background']} />
        </Link>
    );
}
