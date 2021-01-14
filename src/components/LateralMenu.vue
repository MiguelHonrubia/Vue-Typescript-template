<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    absolute
    color="menu"
  >
    <v-list-item class="px-2">
      <v-list-item-avatar v-if="authenticated">
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-title v-if="authenticated" class="MenuAvatar"
        >Tomasín Escudero
      </v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items.filter((x) => x.authenticated == authenticated)"
        :key="item.title"
        link
        :to="item.route"
        @click="item.title == 'Logout' ? logout() : null"
      >
        <v-list-item-icon v-if="authenticated == item.authenticated">
          <v-icon class="MenuIcon">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content v-if="authenticated == item.authenticated">
          <v-list-item-title class="MenuTitle">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { Menu } from "../utils/constants";

export default {
  props: {
    authenticated: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      drawer: true,
      items: Menu,
      mini: true,
    };
  },
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
};
</script>

<style scoped>
.MenuAvatar {
  font-weight: bold;
}
</style>
