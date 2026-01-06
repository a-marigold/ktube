import Link from 'next/link';
import Image from 'next/image';

import itemStyles from './VideoItem.module.scss';

// TODO: remove this interface with real video interface ↓

export interface VideoItemProps {
    videoUrl: string;

    title: string;

    channel: string;

    views: number;

    publishDate: number;

    previewUrl: string;
}
export default function VideoItem({
    title,

    channel,

    views,
    publishDate,

    previewUrl,

    videoUrl,
}: VideoItemProps) {
    return (
        <li className={itemStyles['video-item']}>
            <Link
                href={videoUrl}
                aria-label={'Open "' + title + '" video'}
                className={itemStyles['video-link']}
            >
                <div className={itemStyles['preview-block']}>
                    <Image
                        src={previewUrl}
                        alt=''
                        fill
                        className={itemStyles['preview']}
                    />
                </div>
                <div className={itemStyles['text-block']}>
                    <span className={itemStyles['title']}>{title}</span>
                    <span className={itemStyles['info-text']}>{channel}</span>
                    <div className={itemStyles['info-block']}>
                        <span className={itemStyles['info-text']}>
                            {views} views
                        </span>
                        &nbsp;
                        <span className={itemStyles['info-text']}>•</span>
                        &nbsp;
                        <span className={itemStyles['info-text']}>
                            {publishDate} years ago
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
}
