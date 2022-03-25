import axios from 'axios';

// Action Type
export const DISPLAY_GREETINGS = 'HelloReactFrontEnd/DISPLAY_GREETINGS';

export const initialState = {
  greetings: [],
};

// Action Creators
export const fetchGreetings = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/api/v1/greetings/');
  const data = await response.data;

  dispatch({
    type: DISPLAY_GREETINGS,
    payload: data,
  });
};
