const initialState = {
  messages: [],
  newMessage: '',
  searchWord: '',
  loading: false,
  sending: null,
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case MESSAGES_LOAD_START:
      return {
        ...state,
        loading: true,
      };

    case MESSAGES_LOAD_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };

    case UPDATE_CONTENT:
      return {
        ...state,
        newMessage: action.payload,
      };

    case ADD_SENDING_START:
      return {
        ...state,
        sending: action.payload.sending
      };

    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        // (Это показывает старые)  (Это новое сообщение)
        //           |                      |
        // [...state.messages, action.payload.json],
        messages: state.messages.map(item => {
          if (item.id !== action.payload.tempId ) {
            return item
          } return [...state.messages, action.payload.json,]
        }),
        sending: false,
        newMessage: '',
      };

    case SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };

    case DELETE_WORD:
      return {
        ...state,
        searchWord: '',
      };

    default:
      return state;
  }
}

// тут экшн креэйторы
const MESSAGES_LOAD_START = 'messages/load/start';
const MESSAGES_LOAD_SUCCESS = 'messages/load/success';
const ADD_SENDING_START = 'add/sending/start';
const ADD_MESSAGE_SUCCESS = 'add/message/success';
const UPDATE_CONTENT = 'update/content';
const SEARCH_WORD = 'search/word';
const DELETE_WORD = 'delete/word';

// тут санки
export const receivingMessages = (id, myId) => {
  return (dispatch) => {
    dispatch({ type: MESSAGES_LOAD_START });

    fetch(`https://api.intocode.ru:8001/api/messages/${myId}/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: MESSAGES_LOAD_SUCCESS,
          payload: json,
        });
        document.getElementById('footer').scrollIntoView({ block: 'end' });
      });
  };
};

export const changeText = (value) => {
  return {
    type: UPDATE_CONTENT,
    payload: value,
  };
};
export const SetSearchWord = (value) => {
  return {
    type: SEARCH_WORD,
    payload: value,
  };
};
export const deleteWord = () => {
  return {
    type: DELETE_WORD,
  };
};

export const addMessage = (myId, contactId, content) => {
  return (dispatch) => {
    const tempId = Math.random();
    dispatch({
      type: ADD_SENDING_START,
      payload: { tempId: tempId, sending: true, },
    });

    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        myId,
        contactId,
        content,
        type: 'text',
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: ADD_MESSAGE_SUCCESS,
          payload: { tempId: tempId, json: json, sending: false, },
        });
        document
          .getElementById('footer')
          .scrollIntoView({ behavior: 'smooth', block: 'end' });
      });
  };
};
