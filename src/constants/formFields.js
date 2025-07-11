// src/constants/formFields.js
export const formFields = [
  { name: "firstName", label: "First Name", type: "text", required: true },
  { name: "lastName", label: "Last Name", type: "text", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  {
    name: "costGuess",
    label: "Guess the Air Fryer’s Cost ($)",
    type: "text",
    required: true,
  },
  {
    name: "pin",
    label: "Very, very secret 16-digit Spidr PIN",
    type: "password",
    required: true,
  },
];
