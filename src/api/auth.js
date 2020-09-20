import { basePath, apiVersion } from "./config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";

import jwtDecode from "jwt-decode";

export function getAccessToken() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (!accessToken || accessToken == "null") {
    return null;
  }
  willExpireToken(accessToken);
  return accessToken;
}
function willExpireToken(token) {
  const seconds = 60;
  const metaToken = jwtDecode(token);

  console.log("Meta token", metaToken);
}
