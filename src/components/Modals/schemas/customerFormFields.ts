import { z } from "zod";

export const schemaCustomer = z.object({
  name: z.string().min(1, "Name is required"),
  cpfCnpj: z.string().min(1, "Write CPF or CNPJ"),
  email: z.string(),
  phone: z.string(),
  mobilePhone: z.string(),
  postalCode: z.string(),
  address: z.string(),
  addressNumber: z.string(),
  complement: z.string(),
  province: z.string(),
  externalReference: z.string(),
  notificationDisabled: z.boolean(),
  additionalEmails: z.string(),
  municipalInscription: z.string(),
  stateInscription: z.string(),
  observations: z.string(),
});

export type FormDataCustomer = z.infer<typeof schemaCustomer>;

export const labelsCustomer = Object.keys(schemaCustomer.shape).reduce(
  (labels, key) => {
    const formattedKey = key
      .replace(/([A-Z])/g, " $1")
      .replace(/^(.)/, (s) => s.toUpperCase());

    labels[key] = formattedKey;
    return labels;
  },
  {} as { [key: string]: string }
);

// export const formFields = [
//   { fieldName: "name", label: "Name", type: "text", required: true },
//   {
//     fieldName: "cpfCnpj",
//     label: "Cpf or Cnpj",
//     type: "text",
//     required: true,
//   },
//   { fieldName: "email", label: "E-mail", type: "text", required: false },
//   { fieldName: "phone", label: "Phone", type: "text", required: false },
//   {
//     fieldName: "mobilePhone",
//     label: "Mobile phone",
//     type: "text",
//     required: false,
//   },
//   {
//     fieldName: "postalCode",
//     label: "Postal code",
//     type: "text",
//     required: false,
//   },
//   { fieldName: "address", label: "Address", type: "text", required: false },
//   {
//     fieldName: "addressNumber",
//     label: "Address number",
//     type: "text",
//     required: false,
//   },
//   {
//     fieldName: "complement",
//     label: "Complement",
//     type: "text",
//     required: false,
//   },
//   { fieldName: "province", label: "Province", type: "text", required: false },
//   {
//     fieldName: "externalReference",
//     label: "External reference",
//     type: "text",
//     required: false,
//   },
//   {
//     fieldName: "notificationDisabled",
//     label: "Notification",
//     type: "boolean",
//     required: false,
//   },
//   {
//     fieldName: "additionalEmails",
//     label: "Additional e-mails",
//     type: "text",
//     required: false,
//   },
//   {
//     fieldName: "municipalInscription",
//     label: "MunicipalInscription",
//     type: "text",
//     required: false,
//   },
//   {
//     fieldName: "stateInscription",
//     label: "State inscription",
//     type: "text",
//     required: false,
//   },
//   {
//     fieldName: "observations",
//     label: "Observations",
//     type: "text",
//     required: false,
//   },
// ];
