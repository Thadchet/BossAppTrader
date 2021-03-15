import {
  CryptoActionTypes,
  WATCH_TICKER,
  UPDATE_TICKER,
  WATCH_SYMBOLS,
  UPDATE_SYMBOLS,
  UPDATE_MYCOIN,
  WATCH_MYCOIN,
  WATCH_MYBALANCE,
  UPDATE_MYBALANCE,
} from "../types";

interface CryptoState {
  cryptoListTicker: any;
  symbols: any;
  myCoin: any;
  myBalance: number;
}

const initialState: CryptoState = {
  cryptoListTicker: [],
  symbols: [],
  myCoin: [],
  myBalance: 0,
};

export function cryptoReducer(
  state: CryptoState = initialState,
  action: CryptoActionTypes
): CryptoState {
  switch (action.type) {
    case WATCH_TICKER: {
      return {
        ...state,
        cryptoListTicker: action.payload,
      };
    }
    case UPDATE_TICKER: {
      return {
        ...state,
        cryptoListTicker: action.payload,
      };
    }
    case WATCH_SYMBOLS: {
      return {
        ...state,
        symbols: action.payload,
      };
    }
    case UPDATE_SYMBOLS: {
      return {
        ...state,
        symbols: action.payload,
      };
    }
    case UPDATE_MYCOIN: {
      return {
        ...state,
        myCoin: action.payload,
      };
    }
    case WATCH_MYCOIN: {
      return {
        ...state,
        myCoin: action.payload,
      };
    }
    case WATCH_MYBALANCE: {
      return {
        ...state,
        myBalance: action.payload,
      };
    }
    case UPDATE_MYBALANCE: {
      return {
        ...state,
        myBalance: action.payload,
      };
    }
    default:
      return state;
  }
}
