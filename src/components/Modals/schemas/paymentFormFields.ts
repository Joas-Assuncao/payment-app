import { z } from "zod";

export const schemaPayment = z.object({
  billingType: z.enum(["BOLETO", "CREDIT_CARD", "PIX"]),
  discount: z.object({ value: z.number(), dueDateLimitDays: z.number() }),
  interest: z.object({ value: z.number() }),
  fine: z.object({ value: z.number() }),
  customer: z.string(),
  dueDate: z.date(),
  value: z.number(),
  description: z.string(),
  externalReference: z.string(),
  postalService: z.boolean(),
});

export type FormDataPayment = z.infer<typeof schemaPayment>;

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
