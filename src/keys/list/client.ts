import { listKey } from "../../types/listKey";

export const clientListKeys: listKey[] = [
  {
    text: "Nombre / Razón Social",
    align: "start",
    sortable: false,
    value: "fullName",
  },
  { text: "Tipo Persona", value: "clientTypeName" },
  { text: "Socio", value: "isMember" },
  { text: "C. Postal", value: "postalCode" },
  { text: "Población", value: "cityName" },
  { text: "Móvil", value: "mobile" },
  { text: "Email", value: "email" },
];
