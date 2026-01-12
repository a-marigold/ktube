'use client';

import { useRef } from 'react';

import type { RefObject, Dispatch } from 'react';

import { useTooltipStore } from '@/store/TooltipStore';

import { MODAL_GAP } from '@/constants/modalGap';

import OverlayButton from '@/UI/OverlayButton';
import Slider from '@/UI/Slider';

import videoStyles from './VideoPlayer.module.scss';

interface OverlayProps {
    paused: boolean;
    setPaused: Dispatch<boolean>;

    volume: number;

    videoRef: RefObject<HTMLVideoElement | null>;
    playerRef: RefObject<HTMLDivElement | null>;
}
export default function Overlay({
    paused,
    setPaused,

    volume,

    videoRef,
    playerRef,
}: OverlayProps) {
    const prevVolumeRef = useRef<number>(volume);

    const showTooltip = useTooltipStore((state) => state.show);
    const hideTooltip = useTooltipStore((state) => state.hide);

    return (
        <div
            className={videoStyles['overlay']}
            onClick={(event) => {
                event.stopPropagation();
            }}
        >
            <div className={videoStyles['progress-bar']}></div>

            <div className={videoStyles['controls']}>
                <div className={videoStyles['left-controls-block']}>
                    <OverlayButton
                        aria-label='Play video'
                        shape='circle'
                        iconHref={paused ? '#play-icon' : '#pause-icon'}
                        iconWidth={26}
                        iconHeight={26}
                        iconColor='var(--font-color)'
                        onMouseEnter={(event) => {
                            showTooltip({
                                relativeElement: event.currentTarget,
                                title: 'Play video',
                                position: 'top',
                                gap: MODAL_GAP,
                            });
                        }}
                        onMouseLeave={hideTooltip}
                        onClick={() => {
                            if (!videoRef.current) return;

                            videoRef.current.paused
                                ? videoRef.current.play()
                                : videoRef.current.pause();

                            setPaused(videoRef.current.paused);
                        }}
                    />

                    <div className={videoStyles['volume-block']}>
                        <button
                            aria-label={volume ? 'Mute video' : 'Unmute video'}
                            className={videoStyles['mute-button']}
                            onMouseEnter={(event) => {
                                showTooltip({
                                    relativeElement: event.currentTarget,
                                    title: volume
                                        ? 'Mute video'
                                        : 'Unmute video',
                                    position: 'top',
                                    gap: MODAL_GAP,
                                });
                            }}
                            onMouseLeave={hideTooltip}
                            onClick={() => {
                                if (!videoRef.current) return;

                                if (volume) {
                                    prevVolumeRef.current = volume;
                                    videoRef.current.volume = 0;
                                } else {
                                    videoRef.current.volume =
                                        prevVolumeRef.current;
                                }
                            }}
                        >
                            <svg
                                width={24}
                                height={24}
                                color='var(--font-color)'
                                aria-hidden='true'
                            >
                                <use
                                    href={
                                        volume === 0
                                            ? '#mute-icon'
                                            : '#volume-icon'
                                    }
                                />
                            </svg>
                        </button>

                        <Slider
                            ariaLabel='Change volume'
                            value={volume}
                            minValue={0}
                            maxValue={1}
                            step={0.01}
                            onChange={(value) => {
                                if (!videoRef.current) return;

                                videoRef.current.volume = value;
                            }}
                        />
                    </div>
                </div>

                <div className={videoStyles['right-controls-block']}>
                    <OverlayButton
                        aria-label='Open video settings'
                        shape='ellipse'
                        iconHref='#gear-icon'
                        iconWidth={24}
                        iconHeight={24}
                        iconColor='var(--font-color)'
                        className={videoStyles['overlay-button']}
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
                        className={videoStyles['overlay-button']}
                        onClick={() => {
                            document.fullscreenElement
                                ? document.exitFullscreen()
                                : playerRef.current?.requestFullscreen();
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
    );
}
