import Image from 'next/image';

import ReactionButton from '@/UI/ReactionButton';

import reactStyles from './ReactionBlock.module.scss';

interface ReactionBlockProps {
    channelName: string;
    avatarUrl: string;
    subsriptions: number;

    likes: number;
    disLikes: number;
    views: number;
    publishDate: number;
}
export default function ReactionBlock({
    avatarUrl,
    channelName,
    subsriptions,
    likes,
    disLikes,

    views,
    publishDate,
}: ReactionBlockProps) {
    return (
        <div className={reactStyles['reaction-block']}>
            <div className={reactStyles['channel-block']}>
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
            </div>

            <ReactionButton
                variant='accent'
                title='Subscribe'
                aria-label={`Subscribe on ${channelName}`}
            />

            <div role='group' className={reactStyles['tools-group']}>
                <ReactionButton
                    variant='secondary'
                    title={`${likes}`}
                    icon={{
                        iconHref: '#like-icon',
                        iconWidth: 24,
                        iconHeight: 24,
                        iconColor: 'var(--font-color)',
                    }}
                    aria-label='Like the video'
                />
                <ReactionButton
                    variant='secondary'
                    title={`${disLikes}`}
                    icon={{
                        iconHref: '#dislike-icon',
                        iconWidth: 24,
                        iconHeight: 24,
                        iconColor: 'var(--font-color)',
                    }}
                    aria-label='Dislike the video'
                />
                <ReactionButton
                    variant='secondary'
                    title='Save'
                    aria-label='Save the video to playlist'
                />
            </div>
        </div>
    );
}
