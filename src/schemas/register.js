import * as Yup from "yup";


const register = Yup.object({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Firstname is required!!")
    .trim("This field is required!!")
    .matches(/^([a-zA-Z])*$/, "Enter string only!!"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Lastname is required!!")
    .trim("This field is required!!")
    .matches(/^([a-zA-Z])*$/, "Enter string only!!"),
  email: Yup.string()
    .email("Please Enter a valid email!!")
    .required("This field is required!!")
    .trim("This field is required!!"),
  dob: Yup.date().required("This field is required!!"),
  address: Yup.string()
    .required("This field is required!!")
    .trim("This field is required!!"),
  password: Yup.string()
    .required("This field is required!!")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .required("This field is required!!")
    .oneOf([Yup.ref("password"), null], "Passwords must match!!"),
  phoneNumber: Yup.string()
    .trim("This field is required!!")
    .matches(/^([0-9])*$/, "Enter numbers only!!")
    .required("This field is required!!")
});

export { register };
