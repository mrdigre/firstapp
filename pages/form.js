import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          title: "",
          img: "",
          subTitle: "",
          price: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          img: Yup.string()
            .url("Enter valid URL")
            .required("URL is required")
            .transform((value, originalValue) => {
              const url = new URL(originalValue);
              return url.href;
            }),
          subTitle: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          price: Yup.number()
            .typeError("Price must be a number")
            .positive("Price must be greater than zero")
            .required("Price is required")
            .transform((value, originalValue) => {
              const numberValue = Number(originalValue);
              if (isNaN(numberValue)) {
                return value;
              }
              return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(numberValue);
            }),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput label="Title" name="title" type="text" placeholder="" />

          <MyTextInput
            label="Image URL"
            name="img"
            type="text"
            placeholder=""
          />

          <MyTextInput
            label="Product Description"
            name="subTitle"
            type="text"
            placeholder=""
          />

          <MyTextInput label="Price" name="price" type="text" placeholder="" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
