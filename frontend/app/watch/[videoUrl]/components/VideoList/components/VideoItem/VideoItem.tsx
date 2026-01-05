import Image from 'next/image';

import itemStyles from './VideoItem.module.scss';

export default function VideoItem() {
    return (
        <div className={itemStyles['video-item']}>
            <div className={itemStyles['preview-block']}>
                <Image src={''} alt='' fill />
            </div>

            <div className={itemStyles['text-block']}>
                <span className={itemStyles['title']}></span>

                <span className={itemStyles['info-text']}></span>
                <div className={itemStyles['info-block']}>
                    <span className={itemStyles['info-text']}></span>
                </div>
            </div>
        </div>
    );
}
