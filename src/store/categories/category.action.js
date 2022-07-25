import { newReducer } from "../../utils/reducer/reducer.utilis";
import CATEGORIES_ACTION_TYPE from "./category.types";

export const setCategoriesMap = (categoriesMap) =>
  newReducer(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
