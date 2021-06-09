import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions/Dog';

const initialState = {
  image: null,
  link: null,
  isFetching: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (FETCH_START):
      return ({
        ...state,
        isFetching: true
      });
    case (FETCH_SUCCESS):
      return ({
        ...state,
        image: action.payload.image,
        link: action.payload.link,
        isFetching: false
      });
    case (FETCH_FAIL):
      return ({
        ...state,
        error: action.payload,
        isFetching: false
      });
    default:
      return state;
  }
};

export default reducer;