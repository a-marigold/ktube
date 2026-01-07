'use client';

import { useState, useEffect, useRef } from 'react';

import { useTooltipStore } from '@/store/TooltipStore';

import { MODAL_GAP } from '@/constants/modalGap';

import OverlayButton from '@/UI/OverlayButton';

import videoStyles from './VideoPlayer.module.scss';

interface VideoPlayerProps {
    videoUrl: string;
}
export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [paused, setPaused] = useState<boolean>(true);

    useEffect(() => {}, [paused]);

    const showTooltip = useTooltipStore((state) => state.show);
    const hideTooltip = useTooltipStore((state) => state.hide);

    return (
        <div
            className={videoStyles['video-player']}
            onClick={() => {
                if (!videoRef.current) return;

                videoRef.current.paused
                    ? videoRef.current.play()
                    : videoRef.current.pause();
                setPaused(videoRef.current.paused);
            }}
        >
            <video
                ref={videoRef}
                src={videoUrl}
                controls={false}
                className={videoStyles['video']}
            >
                <track
                    src='/.vtt'
                    srcLang='en'
                    kind='captions'
                    label='English'
                    default
                ></track>
            </video>

            <div
                className={videoStyles['overlay']}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className={videoStyles['track']}></div>

                <div className={videoStyles['controls']}>
                    <div className={videoStyles['left-controls-block']}>
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

                    <div className={videoStyles['right-controls-block']}>
                        <OverlayButton
                            aria-label='Open video settings'
                            shape='ellipse'
                            iconHref='#gear-icon'
                            iconWidth={24}
                            iconHeight={24}
                            iconColor='var(--font-color)'
                            onMouseEnter={(event) => {
                                showTooltip({
                                    relativeElement: event.currentTarget,
                                    title: 'Video settings',
                                    position: 'top',
                                    gap: MODAL_GAP,
                                });
                            }}
                            onMouseLeave={hideTooltip}
                        />

                        <OverlayButton
                            aria-label='Open video in full screen'
                            shape='ellipse'
                            iconHref='#full-screen-icon'
                            iconWidth={24}
                            iconHeight={24}
                            iconColor='var(--font-color)'
                            onClick={() => {
                                videoRef.current?.requestFullscreen();
                            }}
                            onMouseEnter={(event) => {
                                showTooltip({
                                    relativeElement: event.currentTarget,
                                    title: 'Full screen',
                                    position: 'top',
                                    gap: MODAL_GAP,
                                });
                            }}
                            onMouseLeave={hideTooltip}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
