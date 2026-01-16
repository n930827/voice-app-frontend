import api from "../axios";

/**
 * 登入 API
 * @param {Object} data - { username, password }
 */
export const login = (data) => {
  return api.post("/login", data);
};
