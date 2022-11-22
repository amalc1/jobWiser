import { useState } from "react";
import { omit } from "lodash";

export const useLoginForm = (doLogin) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [emailErr, setEmailErr] = useState(null);
  const [fieldsErr, setAllFieldsErr] = useState(false);
  const [passErr, setPassErr] = useState(null);
  function validate(name, value) {
    switch (name) {
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
          setEmailErr(false); 
        }
        break;

      case "password":
        if (value.length < 8) {
          setErrors({
            ...errors,
            password: "Password should contains atleast 8 charaters",
          });
          setPassErr(true);
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
          setPassErr(false);
        }
        break;

      default:
        break;
    }
  }

  const handleChange = (event) => {
    event.persist();
    console.log("input name", event.target.name);
    console.log("input value", event.target.value);
    let name = event.target.name;
    let val = event.target.value;
    validate(name, val);
    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (Object.keys(errors).length !== 0) {
      errors?.email ? setEmailErr(true) : setEmailErr(false);
      errors?.password ? setPassErr(true) : setPassErr(false);
    } else if (Object.keys(values).length <= 1) {
      setAllFieldsErr(true);
      setTimeout(() => {
        setAllFieldsErr(false);
      }, "1500");
    } else {
      doLogin()
    }
  };

  return {
    handleChange,
    handleSubmit,
    errors,
    emailErr,
    passErr,
    fieldsErr,
  };
};
