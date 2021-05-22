const initialState = {
  contacts: [],
  lastMessage: {
    content: '',
  },
  loading: false,
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

    default:
      return state;
  }
}

const CONTACTS_LOAD_START = 'contacts/load/start';
const CONTACTS_LOAD_SUCCESS = 'contacts/load/success';

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
