// utils/validators.js

export function isEmail(value) {
  return /^[\w.-]+@gmail\.com$/.test(value.trim());
}

export function isPhoneNumber(value) {
  const cleaned = value.replace(/\D/g, "");
  return cleaned.length === 10;
}

export function isOnlyLetters(value) {
  return /^[A-Za-z]+$/.test(value.trim());
}

export function isValidCost(value) {
  return /^\d+(\.\d{1,2})?$/.test(value.trim()); // allows decimals too
}

export function isValidPin(value) {
  const cleaned = value.replace(/\D/g, "");
  return cleaned.length === 16;
}

export function formatPin(value) {
  const raw = value.replace(/\D/g, "").slice(0, 16);
  return raw.match(/.{1,4}/g)?.join("-") || "";
}
