import styles from './Filter.module.css'
import PropTypes from 'prop-types';
import { setFilter } from 'redux/slice.js/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = ({ filter }) => {
    const dispatch = useDispatch();
    const handleFilterChange = (e) => {
        const { value } = e.target
        //  dispatch({ type: 'filter/setFilter', payload: value })
        dispatch(setFilter(value))
    }
    return (
        <>
            <p className={styles.filterTitle}>Find contacts by name</p>
            <input className={styles.filterInput}
                type="text"
                name="filter"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={filter}
                onChange={handleFilterChange}
            />
        </>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
}