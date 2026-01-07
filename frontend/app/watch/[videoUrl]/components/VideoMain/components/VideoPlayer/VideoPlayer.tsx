'use client';

import { useRef } from 'react';

import OverlayButton from '@/UI/OverlayButton';

import videoStyles from './VideoPlayer.module.scss';

interface VideoPlayerProps {
    videoUrl: string;
}
export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <div className={videoStyles['video-player']}>
            <video
                ref={videoRef}
                src={videoUrl}
                controls={false}
                className={videoStyles['video']}
                onClick={(event) => {
                    if (!videoRef.current) return;

                    videoRef.current.paused
                        ? videoRef.current.play()
                        : videoRef.current.pause();
                }}
            />

            <div className={videoStyles['overlay']}>
                <div className={videoStyles['track']}></div>
                <div className={videoStyles['controls']}>
                    <OverlayButton
                        aria-label='Play video'
                        shape='circle'
                        iconHref='#play-icon'
                        iconWidth={26}
                        iconHeight={26}
                        iconColor='var(--font-color)'
                        onClick={() => {
                            if (!videoRef.current) return;

                            videoRef.current.paused
                                ? videoRef.current.play()
                                : videoRef.current.pause();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
