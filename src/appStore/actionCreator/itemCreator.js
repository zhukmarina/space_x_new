import { getDragons } from "../../axios";

import { GET_ITEMS, SET_IS_LOADING_ITEMS } from "../actions/itemsActions";

export const setIsLoadingCards = (isLoading) => ({
  type: SET_IS_LOADING_ITEMS,
  payload: isLoading,
});

export const initItemsCreator = () => async (dispatch) => {
  dispatch(setIsLoadingCards(true));
  try {
    const { data } = await getDragons();

    localStorage.setItem("dragons", JSON.stringify(data));
    dispatch({ type: GET_ITEMS, payload: data });
    dispatch(setIsLoadingCards(false));
  } catch (e) {
    dispatch(setIsLoadingCards(false));
  }
};
