import axios from "axios";

const storage = window.localStorage;
const STORAGE_TOKEN_KEY = "user-token";

export default {
  async loadSession() {
    const session = {
      token: storage.getItem(STORAGE_TOKEN_KEY),
    };
    axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
  },

  async saveSession(token: any) {
    storage.setItem(STORAGE_TOKEN_KEY, token);
    storage.setItem("authenticated", token ? "true" : "false");
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },

  async quitSession() {
    window.localStorage.clear();
    axios.defaults.headers.common["Authorization"] = null;
  },
};
