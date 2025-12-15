import NavList from './components/NavList/NavList';

import { pageLinkList, settingsLinkList } from './navLists';

import navStyles from './FullNavbar.module.scss';

export default function FullNavbar() {
    return (
        <nav className={navStyles['full-navbar']} data-testid='full-navbar'>
            <NavList linkList={pageLinkList} />

            <NavList linkList={settingsLinkList} />
        </nav>
    );
}
