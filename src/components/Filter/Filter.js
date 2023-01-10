import { FilterEl } from "./Filter.styled";
import {MdPersonSearch} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { changeFilter } from "redux/filter-slice";

export const Filter = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    return (
        <>
        {contacts.length > 0 && <FilterEl>
            <label>Search contact by name
            <MdPersonSearch size={25}/>
                <input type="text" onChange={e => dispatch(changeFilter(e.target.value))} value={filter}/>
            </label>
        </FilterEl>}
        </>
    )
}
