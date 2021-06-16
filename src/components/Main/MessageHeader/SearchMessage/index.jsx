import React from 'react';
import styles from './search-message.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteWord, SetSearchWord } from '../../../../redux/ducks/messages';

function SearchMessage() {
  const searchWord = useSelector((state) => state.messages.searchWord);

  const dispatch = useDispatch();

  const handleWord = (e) => {
    dispatch(SetSearchWord(e.target.value));
  };

  const handleDeleteWord = () => {
    dispatch(deleteWord());
  };

  return (
    <div className={styles['search-message']}>
      <i className="fas fa-search" />
      <input
        className={styles['input-message']}
        value={searchWord}
        placeholder="Search"
        onChange={handleWord}
      />
      {searchWord && (
        <span className={styles['close-word']}>
          <i
            className="fa fa-times-circle"
            aria-hidden="true"
            onClick={handleDeleteWord}
          />
        </span>
      )}
    </div>
  );
}

export default SearchMessage;
