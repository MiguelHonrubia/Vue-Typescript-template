import { listKeys } from "../../types/general/listKey";

export const clientListKeys: listKeys[] = [
  {
    key: "nombre",
    text: "Nombre / Razón Social",
    align: "start",
    sortable: false,
  },
  { key: "tipoPersona", text: "Tipo Persona" },
  { key: "socio", text: "Socio" },
  { key: "codigoPostal", text: "C. Postal" },
  { key: "poblacion", text: "Población" },
  { key: "movil", text: "Móvil" },
  { key: "email", text: "Email" },
];
