import {
  SpinnerActionTypes,
  WATCH_SPINNER,
  UPDATE_SPINNER,
  WATCH_IS_CHANGE_SCREEN,
  UPDATE_IS_CHANGE_SCREEN,
} from "../types";

interface SpinnerState {
  isShowSpinner: boolean;
  isChangeScreen: boolean;
}

const initialState: SpinnerState = {
  isShowSpinner: false,
  isChangeScreen: false,
};

export function spinnerReducer(
  state: SpinnerState = initialState,
  action: SpinnerActionTypes
): SpinnerState {
  switch (action.type) {
    case WATCH_SPINNER: {
      return {
        ...state,
        isShowSpinner: action.payload,
      };
    }
    case UPDATE_SPINNER: {
      return {
        ...state,
        isShowSpinner: action.payload,
      };
    }
    case WATCH_IS_CHANGE_SCREEN: {
      return {
        ...state,
        isChangeScreen: action.payload,
      };
    }
    case UPDATE_IS_CHANGE_SCREEN: {
      return {
        ...state,
        isChangeScreen: action.payload,
      };
    }
    default:
      return state;
  }
}
