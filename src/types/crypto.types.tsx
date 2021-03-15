import { ImageSourcePropType } from "react-native";

export const WATCH_TICKER = "WATCH_TICKER";
export const WATCH_SYMBOLS = "WATCH_SYMBOLS";
export const WATCH_MYCOIN = "WATCH_MYCOIN";
export const WATCH_MYBALANCE = "WATCH_MYBALANCE";

export const UPDATE_TICKER = "UPDATE_TICKER";
export const UPDATE_SYMBOLS = "UPDATE_SYMBOLS";
export const UPDATE_MYCOIN = "UPDATE_MYCOIN";
export const UPDATE_MYBALANCE = "UPDATE_MYBALANCE";

interface WatchTickerAction {
  type: typeof WATCH_TICKER;
  payload: String;
}

interface UpdateTickerAction {
  type: typeof UPDATE_TICKER;
  payload: String;
}

interface WatchSymbolsAction {
  type: typeof WATCH_SYMBOLS;
  payload: String;
}

interface UpdateSymbolsAction {
  type: typeof UPDATE_SYMBOLS;
  payload: String;
}

interface WatchMyCoinAction {
  type: typeof WATCH_MYCOIN;
  payload: String;
}

interface UpdateMyCoinAction {
  type: typeof UPDATE_MYCOIN;
  payload: String;
}

interface WatchMyBalanceAction {
  type: typeof WATCH_MYBALANCE;
  payload: number;
}

interface UpdateMyBalanceAction {
  type: typeof UPDATE_MYBALANCE;
  payload: number;
}

export type CryptoActionTypes =
  | WatchTickerAction
  | UpdateTickerAction
  | WatchSymbolsAction
  | UpdateSymbolsAction
  | WatchMyCoinAction
  | UpdateMyCoinAction
  | WatchMyBalanceAction
  | UpdateMyBalanceAction;
