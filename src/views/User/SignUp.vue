<template>
  <v-container id="SignUp" class="spacing-playground pa-8" fluid>
    <v-row>
      <v-col>
        <h1>{{ $t("pages.user.signup.title") }}</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            type="text"
            name="email"
            :rules="emailRules"
            v-model="input.email"
            :placeholder="$t('pages.user.email')"
            :label="$t('pages.user.email')"
            required
          />
          <v-text-field
            type="text"
            name="firstName"
            :rules="firstNameRules"
            v-model="input.firstName"
            :placeholder="$t('pages.user.firstname')"
            :label="$t('pages.user.firstname')"
            required
          />
          <v-text-field
            type="text"
            name="lastName"
            :rules="lastNameRules"
            v-model="input.lastName"
            :placeholder="$t('pages.user.lastname')"
            :label="$t('pages.user.lastname')"
            required
          />
          <v-text-field
            type="password"
            name="password"
            :rules="passwordRules"
            v-model="input.password"
            :placeholder="$t('pages.user.password')"
            :label="$t('pages.user.password')"
            required
          />
          <v-text-field
            type="password"
            name="confirmPassword"
            v-model="confirmPassword"
            :rules="[
              input.confirmPassword != '' || 'Debe confirmar la contraseña',
              input.password === confirmPassword || 'La contraseña no coincide',
            ]"
            :placeholder="$t('pages.user.confirm-password')"
            :label="$t('pages.user.confirm-password')"
            required
          />
          <v-col>
            <v-btn :disabled="!valid" type="button" v-on:click="SignUp()">{{
              $t("pages.user.signup")
            }}</v-btn>
          </v-col>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { SignUp } from "../../services/auth";

export default {
  name: "Login",
  data() {
    return {
      valid: false,
      input: {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
      },
      confirmPassword: "",
      emailRules: [
        (v) => !!v || "El e-mail es obligatorio",
        (v) => /.+@.+\..+/.test(v) || "Debe introducir un email válido",
      ],
      firstNameRules: [(v) => !!v || "El nombre es obligatorio"],
      lastNameRules: [(v) => !!v || "El apellido es obligatorio"],
      passwordRules: [
        (v) => !!v || "La contraseña es obligatoria",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
            v
          ) ||
          "La contraseña debe tener al menos 8 carácteres, una mayúscula, una minúscula, un número y un símbolo",
      ],
    };
  },
  methods: {
    async SignUp() {
      if (
        this.input.email != "" &&
        this.input.firstName != "" &&
        this.input.lastName != "" &&
        this.input.password != ""
      ) {
        const response = await SignUp(this.input);
        if (response) {
          this.$router.replace({ name: "Login" });
        }
      }
    },
  },
};
</script>

<style scoped>
#SignUp {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  padding: 20px;
}
</style>
