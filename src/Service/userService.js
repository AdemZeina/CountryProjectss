const config = require("../config/default.json");
import { authHeader } from "/../_Helpers/_auth_header";
import { handleResponse } from "/../_Helpers/handleTheResponse";
export const userService = {
  getAll,
};

function getAll() {
  const requestOptions = { method: "GET", headers: authHeader() };
  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}
