import {
    faMagnifyingGlass,
    faLeftLong,
    faHouse,
    faUser,
    faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(
        faMagnifyingGlass,
        faLeftLong,
        faUser,
        faHouse,
        faArrowRightFromBracket
    );
};

export default Icons;