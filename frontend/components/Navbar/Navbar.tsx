import { pageLinkList } from './navLists';

import NavList from './components/NavList/NavList';

import navStyles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <nav className={navStyles['navbar']}>
            <NavList linkList={pageLinkList} />
        </nav>
    );
}
