'use static';

// Sprite groups
import NavSprites from './NavSprites';
import HeaderSprites from './HeaderSprites';

export default function SvgSprites() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
            <NavSprites />

            <HeaderSprites />
        </svg>
    );
}
