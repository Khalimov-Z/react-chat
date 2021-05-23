const initialState = {
  _id: null,
  loading: true,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case PROFILE_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        _id: action.payload._id,
      };

    default:
      return state;
  }
}

const PROFILE_LOAD_START = "profile/load/start";
const PROFILE_LOAD_SUCCESS ="profile/load/success";

export function loadProfile() {
  return (dispatch) => {
    dispatch({ type: PROFILE_LOAD_START });

    fetch("https://api.intocode.ru:8001/api/profile")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: PROFILE_LOAD_SUCCESS,
          payload: json,
        });
      });
  };
}