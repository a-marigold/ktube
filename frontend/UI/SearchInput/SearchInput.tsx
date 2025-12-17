import type { InputHTMLAttributes } from 'react';

import inputStyles from './SearchInput.module.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;

    'aria-label': string;
}
export default function SearchInput({
    className,

    ...attributes
}: SearchInputProps) {
    return (
        <div className={inputStyles['input-container']}>
            <div className={inputStyles['input-block']}>
                <svg
                    width={24}
                    height={24}
                    color='var(--font-color)'
                    className={inputStyles['search-icon']}
                >
                    <use href='#search-icon' />
                </svg>
                <input
                    {...attributes}
                    type='text'
                    className={`${inputStyles['search-input']} ${
                        className ?? ''
                    }`}
                />
            </div>

            <div className={inputStyles['icon-block']}>
                <svg width={24} height={24} color='var(--font-color)'>
                    <use href='#search-icon' />
                </svg>
            </div>
        </div>
    );
}
