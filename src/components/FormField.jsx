import { TextField } from "@mui/material";

export default function FormField({
  field,
  value,
  onChange,
  error,
  onKeyDown,
}) {
  const inputProps = {};

  if (field.name === "phone") {
    inputProps.maxLength = 10;
    inputProps.inputMode = "numeric";
  }

  if (field.name === "pin") {
    inputProps.maxLength = 19;
    inputProps.inputMode = "numeric";
  }

  if (field.name === "costGuess") {
    inputProps.inputMode = "decimal";
  }

  if (field.name === "firstName" || field.name === "lastName") {
    inputProps.maxLength = 30;
  }

  return (
    <TextField
      label={field.label}
      name={field.name}
      type={field.type}
      required={field.required}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      fullWidth={false}
      error={!!error}
      helperText={error || " "}
      inputProps={inputProps}
      InputProps={{
        sx: {
          height: "70px",
          backgroundColor: "#1e1e1e",
          color: "#f5f5f5",
          "& input": {
            padding: "0px 12px",
            fontSize: "1rem",
          },
          "&:hover": {
            backgroundColor: "#222222",
          },
          "&.Mui-focused": {
            backgroundColor: "#333333",
          },
        },
      }}
      InputLabelProps={{
        shrink: true, // ✅ keeps label floating always to prevent shifting
        sx: {
          color: "#ffffff",
          fontSize: "0.95rem",
          transform: "translate(12px, -6px) scale(0.85)", // better visual spacing
        },
      }}
    />
  );
}
