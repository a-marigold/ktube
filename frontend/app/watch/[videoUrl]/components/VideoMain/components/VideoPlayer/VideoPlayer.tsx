'use client';

import { useState, useEffect, useRef } from 'react';

import { useHotkeyStore } from '@/store/HotkeyStore';

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

    const registerHotkey = useHotkeyStore((state) => state.register);

    const unregisterHotkey = useHotkeyStore((state) => state.unregister);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const toggleVideoPlaying = (event: KeyboardEvent): void => {
            event.preventDefault();
            console.log(event.key);
            if (video.paused) {
                video.play();
                setPaused(false);
            } else {
                video.pause();
                setPaused(true);
            }
        };

        registerHotkey({
            name: 'Toggle video playing',
            key: 'Space',

            callback: toggleVideoPlaying,
        });

        registerHotkey({
            name: 'Second way to toggle video playing',
            key: 'K',
            callback: toggleVideoPlaying,
        });

        return () => {
            unregisterHotkey('Toggle video playing');

            unregisterHotkey('Second way to toggle video playing');
        };
    }, []);

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
