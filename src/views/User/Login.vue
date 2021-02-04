<template>
  <v-container id="login" class="spacing-playground pa-8" fluid>
    <v-row>
      <v-col><h1>Login</h1></v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            type="text"
            name="email"
            v-model="input.email"
            :rules="emailRules"
            :placeholder="$t('pages.user.email')"
            :label="$t('pages.user.email')"
            required
          />
          <v-text-field
            type="password"
            name="password"
            v-model="input.password"
            :rules="passwordRules"
            :placeholder="$t('pages.user.password')"
            :label="$t('pages.user.password')"
            required
          />
          <v-col
            ><v-btn :disabled="!valid" type="button" v-on:click="auth()">{{
              $t("pages.user.signin")
            }}</v-btn></v-col
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { loginUser } from "../../services/auth";

export default {
  name: "Login",
  data() {
    return {
      valid: false,
      input: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || "El email es obligatorio",
        (v) => /.+@.+\..+/.test(v) || "Debe introducir un email válido",
      ],
      passwordRules: [(v) => !!v || "La contraseña es obligatoria"],
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
