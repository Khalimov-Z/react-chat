const initialState = {
  contacts: [],
  loading: false,
  filter: '',
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case CONTACTS_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case CONTACTS_LOAD_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };

    case FILTER_SET:
      return {
        ...state,
        filter: action.payload,
      }

    case REMOVE_SEARCH_TEXT:
      return {
        ...state,
        filter: '',
      }

    default:
      return state;
  }
}

const CONTACTS_LOAD_START = 'contacts/load/start';
const CONTACTS_LOAD_SUCCESS = 'contacts/load/success';
const FILTER_SET = 'filter/set';
const REMOVE_SEARCH_TEXT = 'remove/search/text/'

export const setFilterText = (text) => {
  return {
    type: FILTER_SET,
    payload: text,
  };
};

export const removeSearch = () => {
  return {
    type: REMOVE_SEARCH_TEXT,
  }
}

export const loadContacts = () => {
  return (dispatch) => {
    dispatch({ type: CONTACTS_LOAD_START });

    fetch('https://api.intocode.ru:8001/api/contacts')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: CONTACTS_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
};