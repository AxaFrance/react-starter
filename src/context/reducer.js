import { GET_TITLE } from './actions';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_TITLE: {
      return {
        ...state,
        title: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
