<template>
  <v-container id="ContainerList">
    <v-row>
      <v-col>
        <v-card>
          <DataTable :headers="TableHeaders" :items="TableItems" />
        </v-card>
      </v-col>
    </v-row>
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
      TableItems: [
        {
          nombre: "nombre",
          tipoPersona: "tipo persona",
          socio: "start",
          codigoPostal: "codigo postal",
          movil: "movil",
          email: "email",
        },
        {
          nombre: "nombre",
          tipoPersona: "tipo persona",
          socio: "start",
          codigoPostal: "codigo postal",
          movil: "movil",
          email: "email",
        },
        {
          nombre: "nombre",
          tipoPersona: "tipo persona",
          socio: "start",
          codigoPostal: "codigo postal",
          movil: "movil",
          email: "email",
        },
        {
          nombre: "nombre",
          tipoPersona: "tipo persona",
          socio: "start",
          codigoPostal: "codigo postal",
          movil: "movil",
          email: "email",
        },
      ],
    };
  },
  methods: {},
  components: {
    DataTable,
  },
};
</script>

<style>
#ContainerList {
  margin-top: 5em;
  max-width: 100%;
}
</style>
