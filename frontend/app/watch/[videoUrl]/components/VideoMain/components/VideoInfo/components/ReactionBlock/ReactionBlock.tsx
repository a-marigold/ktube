import Link from 'next/link';
import Image from 'next/image';

import ReactionButton from '@/UI/ReactionButton';

import reactStyles from './ReactionBlock.module.scss';

interface ReactionBlockProps {
    channelUrl: string;
    channelName: string;
    avatarUrl: string;
    subsriptions: number;

    likes: number;
    disLikes: number;
    views: number;
    publishDate: number;
}
export default function ReactionBlock({
    channelUrl,
    channelName,

    avatarUrl,
    subsriptions,
    likes,
    disLikes,

    views,
    publishDate,
}: ReactionBlockProps) {
    return (
        <div className={reactStyles['reaction-block']}>
            <Link href={channelUrl} className={reactStyles['channel-block']}>
                <Image
                    src={avatarUrl}
                    alt=''
                    width={40}
                    height={40}
                    className={reactStyles['avatar']}
                />
                <div className={reactStyles['channel-info-block']}>
                    <span className={reactStyles['channel-name']}>
                        {channelName}
                    </span>

                    <span className={reactStyles['subscriptions']}>
                        {subsriptions}
                    </span>
                </div>
            </Link>

            <ReactionButton
                variant='accent'
                title='Subscribe'
                aria-label={`Subscribe on ${channelName}`}
                isActive={false}
            />

            <div role='group' className={reactStyles['tools-group']}>
                <ReactionButton
                    variant='secondary'
                    title={`${likes}`}
                    aria-label='Like the video'
                    icon={{
                        iconHref: '#like-icon',
                        activeIconHref: '#fill-like-icon',
                        iconWidth: 24,
                        iconHeight: 24,
                        iconColor: 'var(--font-color)',
                    }}
                />
                <ReactionButton
                    variant='secondary'
                    title={`${disLikes}`}
                    aria-label='Dislike the video'
                    icon={{
                        iconHref: '#dislike-icon',
                        activeIconHref: '#fill-dislike-icon',
                        iconWidth: 24,
                        iconHeight: 24,
                        iconColor: 'var(--font-color)',
                    }}
                />

                <ReactionButton
                    variant='secondary'
                    title='Save'
                    aria-label='Save the video to playlist'
                    icon={{
                        iconHref: '#save-icon',
                        iconWidth: 24,
                        iconHeight: 24,
                        iconColor: 'var(--font-color)',
                    }}
                />
            </div>
        </div>
    );
}
