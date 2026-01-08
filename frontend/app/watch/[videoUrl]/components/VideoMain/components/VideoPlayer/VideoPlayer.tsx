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
    const [volume, setVolume] = useState<number>(0.6);

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

    // biome-ignore lint: lint/correctness/useExhaustiveDependencies
    useEffect(() => {
        const toggleVideoPlaying = (event: KeyboardEvent): void => {
            event.preventDefault();

            const video = videoRef.current;

            if (video) {
                if (video.paused) {
                    video.play();
                    setPaused(false);
                } else {
                    video.pause();
                    setPaused(true);
                }
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

        registerHotkey({
            name: 'Open video in full screen',
            key: 'F',
            callback: (event) => {
                event.preventDefault();

                document.fullscreenElement
                    ? document.exitFullscreen()
                    : playerRef.current?.requestFullscreen();
            },
        });

        registerHotkey({
            name: 'Increase video volume',
            key: 'ArrowUp',
            callback: () => {
                console.log('b');
                if (playerRef.current?.contains(document.activeElement)) {
                    setVolume((prev) => prev + 0.01);
                }
            },
        });

        registerHotkey({
            name: 'Decrease video volume',
            key: 'ArrowDown',
            callback: (event) => {
                if (playerRef.current?.contains(document.activeElement)) {
                    event.preventDefault();

                    setVolume((prev) => prev - 0.01);
                }
            },
        });

        return () => {
            unregisterHotkey('Toggle video playing');

            unregisterHotkey('Second way to toggle video playing');

            unregisterHotkey('Increase video volume');

            unregisterHotkey('Decrease video volume');
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
                volume={volume}
                setVolume={setVolume}
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
