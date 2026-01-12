'use client';

import CommentInput from './components/CommentInput';

import commentStyles from './Comments.module.scss';

interface CommentsProps {
    videoUrl: string;
}

export default function Comments() {
    return (
        <div className={commentStyles['comments']}>
            <span className={commentStyles['comments-quantity']}>
                {2100} comments
            </span>

            <CommentInput
                avatarUrl={'/__test-avatar.png'}
                aria-label='Input a comment'
            />
        </div>
    );
}
