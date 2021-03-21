import {
  CryptoActionTypes,
  UPDATE_TICKER,
  UPDATE_SYMBOLS,
  UPDATE_MYCOIN,
  UPDATE_MYBALANCE,
} from "../types";
import { cryptoService } from "../services";
import { ActionCreator } from "redux";
import { updateSpinner, updateIsScreenChange } from "./spinner.action";
import { BITKUB_API_SECRET } from "../constants/Config";
import sha256 from "crypto-js/sha256";
import hmacSHA256 from "crypto-js/hmac-sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import Base64 from "crypto-js/enc-base64";

const updateCryptoListTicker: ActionCreator<CryptoActionTypes> = (
  cryptoTickerList: any
) => {
  return { type: UPDATE_TICKER, payload: cryptoTickerList };
};

const updateCryptoSymbols: ActionCreator<CryptoActionTypes> = (
  symbols: any
) => {
  return { type: UPDATE_SYMBOLS, payload: symbols };
};

// MY API FROM MY BACKEND
const updateMyCoin: ActionCreator<CryptoActionTypes> = (myCoinList: any) => {
  return { type: UPDATE_MYCOIN, payload: myCoinList };
};

const updateMyBalance: ActionCreator<CryptoActionTypes> = (balance: any) => {
  return { type: UPDATE_MYBALANCE, payload: balance };
};

// export function getMyBalance() {
//   return (dispatch: any) => {
//     return cryptoService.getServerTime().then(
//       (response: string) => {
//         console.log(`Server Time :============= ${response}`);
//         const hashDigest = sha256(response);
//         console.log(hashDigest);
//         const hmacDigest = Base64.stringify(
//           hmacSHA512(hashDigest, BITKUB_API_SECRET)
//         );
//         const payload = { ts: response, sig: hmacDigest };
//         console.log(payload);
//         return cryptoService
//           .getMyBalance(payload)
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) =>
//             console.log("POST RESPONSE ERROR: " + JSON.stringify(err))
//           );
//       },
//       (error) => {
//         console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
//       }
//     );
//   };
// }

export function getTicker() {
  return (dispatch: any) => {
    return cryptoService.getTicker().then(
      (response) => {
        // console.log(response);
        dispatch(updateCryptoListTicker(response));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
      }
    );
  };
}

export function getTickerByName(payload: any) {
  return (dispatch: any) => {
    return cryptoService.getTickerByName(payload).then(
      (response) => {
        console.log(response);
        // dispatch(updateCryptoListTicker(response));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
      }
    );
  };
}

export function getSymbols() {
  return (dispatch: any) => {
    return cryptoService.getSymbols().then(
      (response) => {
        // console.log(response.result);
        dispatch(updateCryptoSymbols(response.result));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
      }
    );
  };
}

export function getServerTime() {
  return (dispatch: any) => {
    return cryptoService.getServerTime().then(
      (response) => {
        console.log(response);
        // dispatch(updateCryptoSymbols(response.result));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
      }
    );
  };
}

// MY API FROM MY BACKEND
export function getMyCoin() {
  return (dispatch: any) => {
    return cryptoService.getMyCoin().then(
      (response) => {
        dispatch(updateMyCoin(response));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
      }
    );
  };
}

export function addMyCoin(payload: any) {
  return (dispatch: any) => {
    dispatch(updateSpinner(true));
    return cryptoService.addMyCoin(payload).then(
      (response) => {
        console.log(response);
        dispatch(updateSpinner(false));
        dispatch(updateIsScreenChange(true));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
        dispatch(updateSpinner(false));
        dispatch(updateIsScreenChange(true));
      }
    );
  };
}

export function getMyBalance() {
  return (dispatch: any) => {
    return cryptoService.getMyBalance().then(
      (response) => {
        // console.log(response[0].balance);
        dispatch(updateMyBalance(response[0].balance));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
      }
    );
  };
}

export function updateCoin(payload: any) {
  return (dispatch: any) => {
    dispatch(updateSpinner(true));
    return cryptoService.updateCoin(payload).then(
      (response) => {
        console.log(response);
        dispatch(updateSpinner(false));
        dispatch(updateIsScreenChange(true));
        // dispatch(updateMyBalance(response[0].balance));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
        dispatch(updateSpinner(false));
        dispatch(updateIsScreenChange(true));
      }
    );
  };
}

export function deleteCoin(payload: any) {
  return (dispatch: any) => {
    dispatch(updateSpinner(true));
    return cryptoService.deleteCoin(payload).then(
      (response) => {
        console.log(response);
        dispatch(updateSpinner(false));
        dispatch(updateIsScreenChange(true));
        // dispatch(updateMyBalance(response[0].balance));
      },
      (error) => {
        console.log("POST RESPONSE ERROR: " + JSON.stringify(error));
        dispatch(updateSpinner(false));
        dispatch(updateIsScreenChange(true));
      }
    );
  };
}
