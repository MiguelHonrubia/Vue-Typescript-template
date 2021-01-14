<template>
  <v-container id="SignUp" class="spacing-playground pa-8" fluid>
    <v-row>
      <v-col>
        <h1>Sign Up</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          type="text"
          name="email"
          v-model="input.email"
          placeholder="Email"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          type="text"
          name="firstName"
          v-model="input.firstname"
          placeholder="Firstname"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          type="text"
          name="lastName"
          v-model="input.lastname"
          placeholder="Lastname"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-text-field
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Password"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn type="button" v-on:click="SignUp()">Sign up</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { Register } from "../../services/auth";

export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        firstname: "",
        lastname: "",
        password: "",
      },
    };
  },
  methods: {
    SignUp() {
      if (
        this.input.email != "" &&
        this.input.firstname != "" &&
        this.input.lastname != "" &&
        this.input.password != ""
      ) {
        Register(this.input).then(() => {
          this.$router.replace({ name: "Login" });
        }),
          (error) => {
            console.error(error);
          };
      } else {
        //todo: required validation
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
