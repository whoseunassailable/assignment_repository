// src/hooks/useForm.js
import { useState } from "react";

export default function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setFieldError = (name, error) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const clearErrors = () => setErrors({});

  return [formData, updateField, errors, setFieldError, clearErrors];
}
