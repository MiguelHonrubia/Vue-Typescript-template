<template>
  <v-data-table :headers="headers" :items="items"></v-data-table>
</template>

<script>
import { TableHeaders, TableItems } from "../views/Client/List";

export default {
  name: "List",
  props: {
    headers: TableHeaders,
    items: TableItems,
  },
  data() {
    return {};
  },
};
</script>
