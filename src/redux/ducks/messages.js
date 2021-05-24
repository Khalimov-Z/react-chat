const initialState = {
  messages: [],
  newMessage: '',
  loading: true,
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

    case ADD_MESSAGE_START:
      return {
        ...state,
        loading: true,
      };

    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        newMessage: '',
        messages: [
          ...state.messages,
          action.payload,
        ]
      };

    default:
      return state;
  }
}

// тут экшн креэйторы
const MESSAGES_LOAD_START = 'messages/load/start';
const MESSAGES_LOAD_SUCCESS = 'messages/load/success';
const ADD_MESSAGE_START = 'add/message/start';
const ADD_MESSAGE_SUCCESS = 'add/message/success';
const UPDATE_CONTENT = 'update/content';

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
      });
  };
};

export const changeText = (e) => {
  return {
    type: UPDATE_CONTENT,
    payload: e,
  };
};

export const addMessage = (myId, id, newMessage) => {
  return (dispatch, getState) => {
    // const { newMessage } = getState().messages;
    dispatch({ type: ADD_MESSAGE_START });

    fetch("https://api.intocode.ru:8001/api/messages", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        myId,
        id,
        newMessage,
        type: 'text',
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: ADD_MESSAGE_SUCCESS, payload: json});
      });
  };
};
