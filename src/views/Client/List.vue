<template>
  <v-container class="spacing-playground pa-8" fluid>
    <v-col>
      <DataTable :headers="TableHeaders" :items="TableItems" />
    </v-col>
  </v-container>
</template>

<script>
import DataTable from "../../components/general/DataTable";
import { clientListKeys } from "../../keys/list/client";

export default {
  name: "List",
  data() {
    return {
      TableHeaders: clientListKeys,
      TableItems: [],
    };
  },
  methods: {},
  components: {
    DataTable,
  },
};
</script>
