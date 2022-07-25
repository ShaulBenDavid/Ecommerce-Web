import { newReducer } from "../../utils/reducer/reducer.utilis";
import CATEGORIES_ACTION_TYPE from "./category.types";

export const setCategories = (categoriesArray) =>
  newReducer(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
