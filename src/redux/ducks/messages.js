const initialState = {
  messages: [],
  newMessage: '',
  searchWord: '',
  loading: false,

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

    case ADD_MESSAGE_START:
      return {
        ...state,
        messages: [...state.messages,{
          ...action.payload,
          sending: true,
        }]
      };

    case ADD_MESSAGE_SUCCESS:

      return {
        ...state,
        newMessage: '',
        messages: state.messages.map((message) => {
          if(message.tempId === action.payload.tempId)
          {
            return {
              ...message,
              sending:false,
            }

          }
          return message
        })
      };

    case DELETE_MESSAGE_START:
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message._id === action.payload) {
            return {
              // ...action.payload.data
              ...message,
              deleting: true,
            };
          }
          return message;
        }),
      };

    case DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message._id !== action.payload,
        ),
      };

    case UPDATE_CONTENT:
      return {
        ...state,
        newMessage: action.payload,
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
const ADD_MESSAGE_START = 'add/message/start';
const ADD_MESSAGE_SUCCESS = 'add/message/success';
const UPDATE_CONTENT = 'update/content';
const SEARCH_WORD = 'search/word';
const DELETE_WORD = 'delete/word';
const DELETE_MESSAGE_START = 'delete/message/start';
const DELETE_MESSAGE_SUCCESS = 'delete/message/success';

// тут санки
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

export const addMessage = (myId, contactId, content) => {
  return (dispatch) => {
    const tempId = Math.random();
    const time = new Date();
    dispatch({ type: ADD_MESSAGE_START,
      payload:{myId:myId, tempId:tempId, contactId:contactId, content:content, type:"text",time:time } });

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
      .then((data) => {
        dispatch({ type: ADD_MESSAGE_SUCCESS, payload:{ tempId:tempId,data:data } });
        document
        .getElementById('footer')
        .scrollIntoView({ block: 'end' });
      });
  };
};

export const deleteMessage = (_id) => {
  return function (dispatch) {
    dispatch({ type: DELETE_MESSAGE_START, payload: _id });

    fetch(`https://api.intocode.ru:8001/api/messages/${_id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: DELETE_MESSAGE_SUCCESS,
          payload: _id,
        });
      });
  };
};
