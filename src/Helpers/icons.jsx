import {
    faMagnifyingGlass,
    faLeftLong,
    faHouse,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const Icons = () => {
    return library.add(
        faMagnifyingGlass,
        faLeftLong,
        faUser,
        faHouse
    );
};

export default Icons;