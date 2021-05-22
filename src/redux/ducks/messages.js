const initialState = {
  items: [],
  loading: true,
};

export default function messages(state = initialState, action) {
  switch (action.type) {

    case MESSAGES_LOAD_START:
      return {
        ...state,
        loading: true,
      }

    case MESSAGES_LOAD_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }

    default:
      return state;
  }
}

// тут экшн креэйторы
const MESSAGES_LOAD_START = 'messages/load/start';
const MESSAGES_LOAD_SUCCESS = 'messages/load/success';

// тут санки
export const receivingMessages = () => {
  return (dispatch) => {
    dispatch({ type: MESSAGES_LOAD_START })

    fetch('https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/5f31422e9418570bc43fcbb4')
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: MESSAGES_LOAD_SUCCESS,
        payload: json,
      })
    })
  }
}
