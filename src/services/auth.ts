import axios from "axios";
import userSession from "../modules/user-session";
import { UserRegistration } from "../types/user";

export const Login = (user: any) => {
  return new Promise((resolve, reject) => {
    axios.post("https://localhost:44347/api/Auth/SignIn", user).then(
      (response) => {
        const token = response.data;
        userSession.saveSession(token);
        resolve(user);
      },
      function(err) {
        console.error("Login error", err);
        reject(err.response);
      }
    );
  });
};

export const Register = (user: UserRegistration) => {
  return new Promise((resolve, reject) => {
    axios.post("https://localhost:44347/api/Auth/SignUp", user).then(
      () => {
        resolve(user);
      },
      function(err) {
        console.error("Register error", err);
        reject(err.response);
      }
    );
  });
};

export const loadUser = () => {
  userSession.loadSession();
};

export const logout = (router: any) => {
  userSession.quitSession();
  if (router) {
    router.push({ name: "Login" });
  }
};
