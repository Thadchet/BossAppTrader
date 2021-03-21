import { apiEndpoint, apiBitkubEndpoint } from "../constants/Config";
import { getFromServer, postToServer } from "./apiCall";

export const cryptoService = {
  getTicker,
  getSymbols,
  getServerTime,
  getMyCoin,
  getTickerByName,
  addMyCoin,
  getTickerByNameDirect,
  getMyBalance,
  updateCoin,
  deleteCoin,
};

async function getTicker(): Promise<any> {
  console.log("getTicker service");
  return await getFromServer(apiBitkubEndpoint + "market/ticker", null);
}

async function getTickerByName(payload: any): Promise<any> {
  console.log("getTickerByName service");
  return await getFromServer(apiBitkubEndpoint + "market/ticker", payload);
}

async function getSymbols(): Promise<any> {
  console.log("getSymbols service");
  return await getFromServer(apiBitkubEndpoint + "market/symbols", null);
}

async function getServerTime(): Promise<any> {
  console.log("getServerTime service");
  return await getFromServer(apiBitkubEndpoint + "servertime", null);
}

// async function getMyBalance(payload: any): Promise<any> {
//   console.log("getMyBalance service");
//   return await postToServer(apiBitkubEndpoint + "market/balances", payload);
// }

// MY API FROM MY BACKEND
async function getMyCoin(): Promise<any> {
  console.log("getMyCoin service");
  return await getFromServer(apiEndpoint + "crypto/getcoin", null);
}

async function addMyCoin(payload: any): Promise<any> {
  console.log("addMyCoin service");
  return await postToServer(apiEndpoint + "crypto/addcoin", payload);
}

async function getTickerByNameDirect(payload: any): Promise<any> {
  console.log("getTickerByNameDirect service");
  return await getFromServer(apiBitkubEndpoint + "market/ticker", payload);
}

async function getMyBalance(): Promise<any> {
  console.log("getMyBalance service");
  return await getFromServer(apiEndpoint + "crypto/getmybalance", null);
}

async function updateCoin(payload: any): Promise<any> {
  console.log("updateCoin service");
  return await postToServer(apiEndpoint + "crypto/updatecoin", payload);
}

async function deleteCoin(payload: any): Promise<any> {
  console.log("deleteCoin service");
  return await postToServer(apiEndpoint + "crypto/deletecoin", payload);
}