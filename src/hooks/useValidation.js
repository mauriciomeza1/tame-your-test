import { useState } from "react";

const initialState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  testOfInterest: "",
};

const initialFormErrors = {
  fullName: null,
  email: null,
  phoneNumber: null,
  testOfInterest: null,
};

export function useValidation() {
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validatePhoneNumber = (number) => /^\d{10,15}$/.test(number);
  const validateFullName = (fullName) => {
    if (!fullName.trim()) return "Full name is required";
    if (fullName.length < 2)
      return "Full name should be at least 2 characters long";
    if (fullName.length > 50)
      return "Full name should not exceed 50 characters";
    if (!/^[a-zA-Z\s]+$/.test(fullName))
      return "Full name should only contain letters and spaces";

    const parts = fullName.split(" ").filter((part) => part);
    if (parts.length < 2) return "Full name should include a last name";

    return null;
  };

  function validateForm() {
    let errors = {};

    errors.fullName = validateFullName(formData.fullName) || null;
    errors.email = validateEmail(formData.email)
      ? null
      : "Invalid email address";
    errors.phoneNumber = validatePhoneNumber(formData.phoneNumber)
      ? null
      : "Invalid phone number, use 10 to 15 digits";
    errors.testOfInterest = formData.testOfInterest
      ? null
      : "Please select if you want a doggo pic";

    setFormErrors(errors);
    return errors;
  }

  function resetFormData() {
    setFormData(initialState);
  }

  function getFirstErrorMessage() {
    for (let field of ["fullName", "email", "phoneNumber", "testOfInterest"]) {
      if (formErrors[field]) {
        return { field, message: formErrors[field] };
      }
    }
    return null;
  }

  return {
    formData,
    setFormData,
    formErrors,
    setFormErrors,
    isSubmitted,
    setIsSubmitted,
    validateForm,
    getFirstErrorMessage,
    resetFormData,
  };
}
