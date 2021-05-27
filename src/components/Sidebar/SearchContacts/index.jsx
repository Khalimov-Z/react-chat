import React from 'react';
import styles from './search-contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeSearch, setFilterText } from '../../../redux/ducks/contacts';

function SearchContacts() {
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    dispatch(setFilterText(event.target.value));
  };

  const handleDelete = () => {
    dispatch(removeSearch());
  };

  return (
    <>
      <div className={styles['sidebar-header']}>
        <div className={styles['head-block']}>
          <div className={styles.magnifier}>
            <i className="fas fa-search"> </i>
          </div>
          <div className={styles.search}>
            <input
              className={styles.input}
              type="text"
              placeholder="Search contact"
              value={filter}
              onChange={handleChangeFilter}
            />
          </div>
          <button
            className={filter ? styles.delete : styles['btn-none']}
            onClick={handleDelete}
          >
            ✖
          </button>
        </div>
        <div className={styles.line}> </div>
      </div>
    </>
  );
}

export default SearchContacts;
