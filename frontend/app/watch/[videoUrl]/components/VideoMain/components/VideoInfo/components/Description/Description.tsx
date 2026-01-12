'use client';

import { useState } from 'react';

import descStyles from './Description.module.scss';

interface DescriptionProps {
    views: number;

    publishDate: number;

    descriptionContent: string;
}
export default function Description({
    views,
    publishDate,

    descriptionContent,
}: DescriptionProps) {
    const isContentLarge = descriptionContent.length > 60;

    const contentSnippet = descriptionContent.slice(0, 60);

    const [expanded, setExpanded] = useState<boolean>(!isContentLarge);

    return (
        <div
            className={`${descStyles['description']} ${
                expanded && descStyles['expanded']
            }`}
            onClick={() => {
                setExpanded(true);
            }}
        >
            <div className={descStyles['stats-block']}>
                <span className={descStyles['stat']}>{views} views</span>

                <span className={descStyles['stat']}>
                    {new Date(publishDate).toDateString()}
                </span>
            </div>

            <div
                id='description-content'
                className={descStyles['description-content']}
            >
                {expanded ? (
                    <>
                        {descriptionContent}

                        {isContentLarge && (
                            <button
                                aria-label='Collapse description of video'
                                aria-expanded='true'
                                aria-controls='description-content'
                                className={`${descStyles['expand-button']} ${descStyles['expand-hint']}`}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    setExpanded(false);
                                }}
                            >
                                Collapse
                            </button>
                        )}
                    </>
                ) : (
                    <>
                        {contentSnippet}
                        <span className={descStyles['expand-hint']}>
                            &nbsp; ...more
                        </span>
                    </>
                )}
            </div>
        </div>
    );
}
