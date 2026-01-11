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
    const rtf = new Intl.RelativeTimeFormat();

    return (
        <div className={descStyles['description']}>
            <div className={descStyles['stats-block']}>
                <span className={descStyles['stat']}>{views} views</span>

                <span className={descStyles['stat']}>
                    {new Date(publishDate).toDateString()}
                </span>
            </div>

            <div className={descStyles['description-content']}>
                {descriptionContent}
            </div>
        </div>
    );
}
