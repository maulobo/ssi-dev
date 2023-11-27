import { useState } from "react";
//import emailjs from "@emailjs/browser";

export function useForm(initialForm, validateForm) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [response, setResponse] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validateForm(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validateForm(form));

    if (Object.keys(error).length === 0) {
      setResponse(true);
      setForm(initialForm);

      setTimeout(() => setResponse(false), 10000);
      //emailJS
      console.log(form);
    } else {
      return;
    }
  };

  return {
    form,
    error,
    response,
    handleSubmit,
    handleChange,
    handleBlur,
  };
}
