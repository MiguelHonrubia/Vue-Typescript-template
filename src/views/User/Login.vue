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
          :placeholder="$t('pages.user.email')"
      /></v-col>
    </v-row>
    <v-row>
      <v-col
        ><v-text-field
          type="password"
          name="password"
          v-model="input.password"
          :placeholder="$t('pages.user.password')"
      /></v-col>
    </v-row>
    <v-row>
      <v-col><v-btn type="button" v-on:click="auth()">Sign in</v-btn></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { loginUser } from "../../services/auth";

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
        const user = await loginUser(this.input);
        if (user) {
          this.$emit("authenticated", true);
          this.$router.push({ name: "Home" });
        }
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
