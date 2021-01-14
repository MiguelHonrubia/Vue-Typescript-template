<template>
  <v-container id="login" class="spacing-playground pa-8" fluid>
    <v-row>
      <v-col><h1>Login</h1></v-col></v-row
    >
    <v-row>
      <v-col
        ><v-text-field
          type="text"
          name="email"
          v-model="input.email"
          placeholder="Email"
      /></v-col>
    </v-row>
    <v-row>
      <v-col
        ><v-text-field
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Password"
      /></v-col>
    </v-row>
    <v-row>
      <v-col><v-btn type="button" v-on:click="auth()">Sign in</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { Login } from "../../services/auth";

export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async auth() {
      if (this.input.email != "" && this.input.password != "") {
        Login(this.input).then((result) => {
          const authenticated = window.localStorage.getItem("authenticated");

          if (authenticated == "true") {
            this.$emit("authenticated", true);
            this.$router.push({ name: "Home" });
          }
        });
      }
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  padding: 20px;
}
</style>
