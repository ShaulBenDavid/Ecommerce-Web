import { newReducer } from "../../utils/reducer/reducer.utilis";
import { USER_ACTION_TYPES } from "./user.types";

export const checkUserSession = () =>
  newReducer(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  newReducer(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  newReducer(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  newReducer(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFail = (error) =>
  newReducer(USER_ACTION_TYPES.SIGN_IN_FAIL, error);

export const signUpStart = (email, password, displayName) =>
  newReducer(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName });

export const signUpSuccess = (user, additionalDetails) =>
  newReducer(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFail = (error) =>
  newReducer(USER_ACTION_TYPES.SIGN_UP_FAIL, error);

export const signOutStart = () =>
  newReducer(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  newReducer(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFail = (error) =>
  newReducer(USER_ACTION_TYPES.SIGN_OUT_FAIL, error);
