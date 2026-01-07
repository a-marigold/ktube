'use static';

// Sprite groups
import NavSprites from './NavSprites';
import HeaderSprites from './HeaderSprites';
import VideoSprites from './VideoSprites';

/**
 * Component for initializing SVG sprites
 */
export default function SvgSprites() {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            style={{ display: 'none' }}
            aria-hidden='true'
        >
            <NavSprites />

            <HeaderSprites />

            <VideoSprites />
        </svg>
    );
}
