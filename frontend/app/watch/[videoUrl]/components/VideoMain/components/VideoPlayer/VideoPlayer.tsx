'use client';

import { useState, useEffect, useRef } from 'react';

import Overlay from './Overlay';

import videoStyles from './VideoPlayer.module.scss';

interface VideoPlayerProps {
    videoUrl: string;
}
export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
    const playerRef = useRef<HTMLDivElement>(null);

    const videoRef = useRef<HTMLVideoElement>(null);
    const [paused, setPaused] = useState<boolean>(true);

    const pauseHintRef = useRef<HTMLDivElement>(null);

    // biome-ignore lint: lint/correctness/useExhaustiveDependencies
    useEffect(() => {
        if (!pauseHintRef.current) return;

        pauseHintRef.current.classList.add(videoStyles['faded']);

        const hintTimeout = setTimeout(() => {
            pauseHintRef.current?.classList.remove(videoStyles['faded']);
        }, 300);

        return () => {
            clearTimeout(hintTimeout);
        };
    }, [paused]);

    return (
        <div
            ref={playerRef}
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

            <Overlay
                paused={paused}
                setPaused={setPaused}
                videoRef={videoRef}
                playerRef={playerRef}
            />

            <div ref={pauseHintRef} className={videoStyles['pause-hint']}>
                <svg
                    width={54}
                    height={54}
                    color='var(--font-color)'
                    aria-hidden='true'
                >
                    <use href={paused ? '#play-icon' : '#pause-icon'} />
                </svg>
            </div>
        </div>
    );
}
