import { ImageSourcePropType } from "react-native";

export const WATCH_SPINNER = "WATCH_SPINNER";
export const WATCH_IS_CHANGE_SCREEN = "WATCH_IS_CHANGE_SCREEN";

export const UPDATE_SPINNER = "UPDATE_SPINNER";
export const UPDATE_IS_CHANGE_SCREEN = "UPDATE_IS_CHANGE_SCREEN";

interface WatchSpinnerAction {
  type: typeof WATCH_SPINNER;
  payload: boolean;
}

interface UpdateSpinnerAction {
  type: typeof UPDATE_SPINNER;
  payload: boolean;
}

interface WatchIsScreenChangeAction {
  type: typeof WATCH_IS_CHANGE_SCREEN;
  payload: boolean;
}

interface UpdateScreenChangeAction {
  type: typeof UPDATE_IS_CHANGE_SCREEN;
  payload: boolean;
}
export type SpinnerActionTypes =
  | WatchSpinnerAction
  | UpdateSpinnerAction
  | UpdateScreenChangeAction
  | WatchIsScreenChangeAction;
