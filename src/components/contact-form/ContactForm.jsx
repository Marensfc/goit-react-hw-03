import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useId } from "react";
import { v4 as uuidv4 } from "uuid";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be no more than 50 characters")
    .trim()
    .required("Name is a required field"),
  number: yup
    .string()
    .max(9, "Must not be more than 9 digits")
    .required("Number is a required field"),
});

const ContactForm = ({ addContact }) => {
  const fieldNameId = useId();
  const fieldNumberId = useId();

  const handleSubmit = (values, action) => {
    const newContact = { ...values, id: uuidv4() };
    addContact(newContact);
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <Form className={css.form}>
          <div className={css.formInputWrapper}>
            <label htmlFor={fieldNameId}>Name</label>
            <Field name="name" id={fieldNameId} />
            <ErrorMessage
              name="name"
              component="p"
              className={css.errorMessage}
            />
          </div>

          <div className={css.formInputWrapper}>
            <label htmlFor={fieldNumberId}>Number</label>
            <Field type="number" name="number" id={fieldNumberId} />
            <ErrorMessage
              name="number"
              component="p"
              className={css.errorMessage}
            />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
