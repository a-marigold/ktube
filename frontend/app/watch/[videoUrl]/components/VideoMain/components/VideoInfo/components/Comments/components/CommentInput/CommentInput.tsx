'use client';

import type { InputHTMLAttributes } from 'react';

import Image from 'next/image';

import ReactionButton from '@/UI/ReactionButton';

import inputStyles from './CommentInput.module.scss';

interface CommentInputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;

    avatarUrl: string;

    'aria-label': string;

    onSend?: () => void;
}
export default function CommentInput({
    avatarUrl,
    className,

    onSend,
    ...attributes
}: CommentInputProps) {
    return (
        <div className={inputStyles['container']}>
            <Image
                src={avatarUrl}
                width={40}
                height={40}
                alt=''
                className={inputStyles['avatar']}
            />

            <div className={inputStyles['interactive-block']}>
                <div className={inputStyles['comment-input-block']}>
                    <input
                        {...attributes}
                        type='text'
                        className={`${inputStyles['comment-input']} ${
                            className ?? ''
                        }`}
                    />
                    <div className={inputStyles['growing-line']} />
                </div>

                <ReactionButton
                    variant='accent'
                    title='Send comment'
                    aria-label='Send comment'
                    className={inputStyles['send-button']}
                />
            </div>
        </div>
    );
}
