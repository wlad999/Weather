import React from "react";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { cityRegExp } from "../../utils/utils";

const validationSchema = Yup.object().shape({
  city: Yup.string()
    .matches(cityRegExp, "only Cyrillic or Latin")
    .min(3, "Name too short")
    .max(30, "Name too long"),
});

const Input = ({ getCityWeather, foundСity, inputError, clearInput }) => {
  const onSubmit = values => {
    getCityWeather(values.city);
    values.city = "";
  };
  const change = (name, e, handleChange, setFieldTouched) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
    clearInput();
  };

  return (
    <Formik
      initialValues={{ city: "" }}
      onSubmit={values => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({ values, errors, handleChange, handleSubmit, setFieldTouched }) => (
        <form onSubmit={handleSubmit}>
          <input
            onChange={e => {
              change("city", e, handleChange, setFieldTouched);
            }}
            name="city"
            className="form-control form-control-sm"
            type="text"
            placeholder="Find city..."
            autoComplete="on"
            value={values.city}
            onBlur={clearInput}
          />
          {errors.city && (
            <div className="text-danger small">
              <ErrorMessage name="city" />
            </div>
          )}
          {inputError.message && (
            <div className="text-danger small">{inputError.message}</div>
          )}
          {!errors.city && foundСity.name && (
            <div className="text-success small">
              You can add {foundСity.name} to the list of cities
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};
export default Input;
