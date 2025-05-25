import * as Yup from "yup";
export const validationScheme = Yup.object().shape({
  customer: Yup.object().nullable().required("Required field"),
  itens: Yup.array().min(1, "Must contain at least one product"),
  paymentMethod: Yup.string().trim().required("Required field"),
});
