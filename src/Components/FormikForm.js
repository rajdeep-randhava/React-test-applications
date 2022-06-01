import React from "react";
import { Formik } from "formik";
import {
  FormControl,
  Button,
  InputGroup
} from "react-bootstrap";
import { register } from "../schemas/register";

const FormikForm = () => {
  const onNameChange = (value, setValue) => {
    setValue("firstName", value);
  };
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          dob: "",
          address: "",
          password: "",
          confirmPassword: "",
          phoneNumber: ""
        }}
        validationSchema={register}
        validateOnBlur={false}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({
          isSubmitting,
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          errors,
          touched,
          setFieldValue,
          setFieldError,
          setFieldTouched
        }) => (
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                value={values.firstName}
                name="firstName"
                onChange={(e) => {
                  onNameChange(e.target.value, setFieldValue);
                }}
                onBlur={handleBlur}
                placeholder="First Name"
              />
              {errors.firstName && touched.firstName && (
                <p>{errors.firstName}</p>
              )}
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={values.lastName}
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Last Name"
              />
              {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
              />
              {errors.email && touched.email && <p>{errors.email}</p>}
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={values.dob}
                name="dob"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="dob"
                type="date"
              />
              {errors.dob && touched.dob && <p>{errors.dob}</p>}
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={values.address}
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Address"
              />
              {errors.address && touched.address && <p>{errors.address}</p>}
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={values.password}
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
              />
              {errors.password && touched.password && <p>{errors.password}</p>}
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={values.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p>{errors.confirmPassword}</p>
              )}
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                value={values.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Phone Number"
              />
              {errors.phoneNumber && touched.phoneNumber && (
                <p>{errors.phoneNumber}</p>
              )}
            </InputGroup>
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
