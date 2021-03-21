import {
  SpinnerActionTypes,
  UPDATE_SPINNER,
  UPDATE_IS_CHANGE_SCREEN,
} from "../types";
import { ActionCreator } from "redux";

export const updateSpinner: ActionCreator<SpinnerActionTypes> = (
  isSpinnerShow: boolean
) => {
  return { type: UPDATE_SPINNER, payload: isSpinnerShow };
};

export const updateIsScreenChange: ActionCreator<SpinnerActionTypes> = (
  isChangeScreen: boolean
) => {
  return { type: UPDATE_IS_CHANGE_SCREEN, payload: isChangeScreen };
};
