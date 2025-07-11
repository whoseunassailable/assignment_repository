import React, { useState } from "react";
import { Box, Typography, Stack, Button, Alert } from "@mui/material"; // ← Alert added
import { formFields } from "../constants/formFields";
import FormField from "./FormField";
import {
  formatPin,
  isOnlyLetters,
  isPhoneNumber,
  isEmail,
  isValidCost,
  isValidPin,
} from "../utils/validators";
import useForm from "../hooks/useForm";

export default function SpidrForm() {
  const initialState = Object.fromEntries(formFields.map((f) => [f.name, ""]));
  const [formData, updateField, errors, setFieldError, clearErrors] =
    useForm(initialState);

  const [submitted, setSubmitted] = useState(false);

  const isFormValid =
    Object.values(errors).every((err) => !err) &&
    Object.values(formData).every((val) => val.trim() !== "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let valid = true;
    let errorMessage = "";
    let processedValue = value;

    switch (name) {
      case "firstName":
      case "lastName":
        if (!isOnlyLetters(value)) {
          errorMessage = "Only letters allowed";
          valid = false;
        }
        break;
      case "phone":
        if (!/^\d{0,10}$/.test(value)) {
          errorMessage = "Only 10 digits allowed";
          valid = false;
        }
        break;
      case "email":
        if (!isEmail(value)) {
          errorMessage = "Email must end with @gmail.com";
          valid = false;
        }
        break;
      case "costGuess":
        if (!isValidCost(value)) {
          errorMessage = "Enter a valid number";
          valid = false;
        }
        break;
      case "pin":
        processedValue = formatPin(value);
        if (!isValidPin(processedValue)) {
          errorMessage = "PIN must be 16 digits";
          valid = false;
        }
        break;
      default:
        break;
    }

    updateField(name, processedValue);
    setFieldError(name, valid ? "" : errorMessage);
  };

  const handleKeyDown = (field) => (e) => {
    const { name } = field;

    if (name === "phone") {
      const allowedKeys = [
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "Tab",
        "Home",
        "End",
      ];
      const isDigit = /^[0-9]$/.test(e.key);
      const isAllowed = allowedKeys.includes(e.key);
      if (!isDigit && !isAllowed) e.preventDefault();
    }

    if (
      (name === "firstName" || name === "lastName") &&
      /[^a-zA-Z]/.test(e.key)
    ) {
      e.preventDefault();
    }

    if (
      name === "costGuess" &&
      !/[0-9.]/.test(e.key) &&
      e.key !== "Backspace"
    ) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(Boolean);
    const hasEmpty = Object.entries(formData).some(
      ([_, val]) => val.trim() === ""
    );

    if (hasErrors || hasEmpty) {
      alert("Please fix errors and fill all fields.");
      return;
    }

    console.log("✅ Valid form submitted:", formData);

    // Clear form
    for (const key in formData) {
      updateField(key, "");
    }
    clearErrors();

    // Show success message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        m: "auto",
        px: 4,
        py: 4,
        backgroundColor: "#1ebec6",
        borderRadius: 2,
        boxShadow: 5,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Air Fryer Interest Form
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          ✅ Form submitted successfully!
        </Alert>
      )}

      <Stack spacing={2}>
        {formFields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name]}
            onChange={handleChange}
            onKeyDown={handleKeyDown(field)}
            error={errors[field.name]}
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          disabled={!isFormValid}
          sx={{
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            border: "1px solid #ffffff",
            "&:hover": {
              backgroundColor: "#222222",
            },
            fontWeight: 600,
          }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
