<template>
  <v-data-table :headers="headers" :items="items"></v-data-table>
</template>

<script>
export default {
  name: "List",
  props: {
    headers: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
