/* eslint-disable no-else-return */
/* eslint-disable default-param-last */

import { GET_ITEMS, GET_ONE, SET_IS_LOADING_ITEMS } from "../actions/itemsActions";

const initialState = {
  items: [],
};

const itemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS: {
      return { ...state, items: payload };
    }

    case GET_ONE:{
      return {...state, items:payload}
    }

    case SET_IS_LOADING_ITEMS: {
      return { ...state, isLoading: payload };
    }

    default: {
      return state;
    }
  }
};

export default itemsReducer;
