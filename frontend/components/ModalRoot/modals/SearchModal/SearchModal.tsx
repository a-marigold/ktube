import SearchItem from './SearchItem';
import type { SearchItemProps } from './SearchItem';

import searchStyles from './SearchModal.module.scss';

export default function SearchModal() {
    const __TEMPORARY_SEARCH_ITEMS: SearchItemProps[] = [];

    return (
        <ul role='listbox' className={searchStyles['search-modal']}>
            {__TEMPORARY_SEARCH_ITEMS.map((item) => (
                <li key={item.href}>
                    <SearchItem {...item} />
                </li>
            ))}
        </ul>
    );
}
