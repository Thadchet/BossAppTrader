import { BITKUB_API_KEY } from "../constants/Config";
import _ from "lodash";
export async function postToServer(path: string, body = {}) {
  let responseData = null;

  try {
    const response = await fetch(
      // process.env.REACT_APP_URL_BASE +
      path,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-BTK-APIKEY": BITKUB_API_KEY,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) return Promise.reject(response);
    else {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }

  return responseData;
}

export async function getFromServer(path: string, req: any) {
  let params: any = [];
  _.forEach(req || {}, (val, key) =>
    params.push(`${key}=${encodeURIComponent(val)}`)
  );
  if (params.length > 0) {
    path = `${path}?${params.join("&")}`;
  }
  console.log(`>>>>>>>>> ${path}`);

  let responseData = null;
  try {
    const response = await fetch(
      // process.env.REACT_APP_URL_BASE  +
      path,
      {
        headers: {
          "Content-Type": "application/json",
          // Authorization: getSession().token,
        },
      }
    );
    if (!response.ok) return Promise.reject(response);
    else {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return responseData;
}
