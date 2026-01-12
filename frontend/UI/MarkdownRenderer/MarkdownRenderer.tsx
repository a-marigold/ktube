import mdStyles from './MarkdownRenderer.module.scss';

export default function MarkdownRenderer() {
    return <div dangerouslySetInnerHTML={{ __html: '__html__' }}> </div>;
}
