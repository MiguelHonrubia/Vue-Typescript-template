<template>
  <v-app>
    <v-app-bar app color="primary" height="50px" dark> </v-app-bar>
    <LateralMenu
      id="lateralMenu"
      :authenticated="authenticated"
      @logout="logout"
    />
    <router-view @authenticated="setAuthenticated" />
  </v-app>
</template>

<script>
import userSession from "./modules/user-session";
import LateralMenu from "./components/LateralMenu";

export default {
  name: "App",
  data() {
    return {
      authenticated:
        window.localStorage.getItem("authenticated") != null
          ? Boolean(window.localStorage.getItem("authenticated"))
          : false,
    };
  },
  methods: {
    setAuthenticated() {
      this.authenticated = true;
    },
    logout() {
      userSession.quitSession(this.$router, this.$emit);
      this.authenticated = false;
    },
  },
  components: {
    LateralMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#lateralMenu {
  padding-top: 50px;
}
</style>
