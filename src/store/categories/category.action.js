import { newReducer } from "../../utils/reducer/reducer.utilis";
import CATEGORIES_ACTION_TYPE from "./category.types";

export const fetchCategoriesStart = () =>
  newReducer(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  newReducer(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCatgoriesFail = (error) =>
  newReducer(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, error);
