'use static';

// Sprite groups
import NavSprites from './NavSprites';

export default function SvgSprites() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
            <NavSprites />
        </svg>
    );
}
