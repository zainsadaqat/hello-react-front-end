import { initialState, DISPLAY_GREETINGS } from '../actions';

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_GREETINGS:
      return { ...state, greetings: action.payload };
    default:
      return state;
  }
};

export default Reducer;
