import { useState } from "react";
import { useValidation, useFetchDoggo } from "../../../hooks";
import { SuccessModal } from "./SuccessModal/SuccessModal";
import "./HeroForm.css";

export function HeroForm() {
  const {
    formData,
    setFormData,
    isSubmitted,
    setIsSubmitted,
    validateForm,
    getFirstErrorMessage,
    resetFormData,
  } = useValidation();

  const { dogImage, fetchDoggo } = useFetchDoggo();

  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [shakeFields, setShakeFields] = useState({});
  const [shakeKey, setShakeKey] = useState(0);
  const [selectedTestOfInterest, setSelectedTestOfInterest] = useState(null);
  const [submittedFormData, setSubmittedFormData] = useState(null);

  function handleChange(e) {
    const { id, value } = e.target;
    const processedEmail = id === "email" ? value.toLowerCase() : value;

    setFormData({ ...formData, [id]: processedEmail });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);

    const errors = validateForm();

    setShakeFields({
      fullName: errors.fullName !== null,
      email: errors.email !== null,
      phoneNumber: errors.phoneNumber !== null,
      testOfInterest: errors.testOfInterest !== null,
    });

    if (Object.values(errors).some((error) => error !== null)) {
      setShakeKey((prevKey) => prevKey + 1);
      return;
    }

    if (formData.testOfInterest === "doggo") {
      fetchDoggo();
    }

    setSelectedTestOfInterest(formData.testOfInterest);
    setSubmittedFormData(formData);
    resetFormData();
    setIsSuccessModalVisible(true);
  }

  function closeModal() {
    setIsSuccessModalVisible(false);
  }

  const firstName = submittedFormData
    ? submittedFormData.fullName.split(" ")[0].charAt(0).toUpperCase() +
      submittedFormData.fullName.split(" ")[0].slice(1)
    : "";

  const firstError = isSubmitted ? getFirstErrorMessage() : null;

  return (
    <section className="hero-form-container">
      <h2 className="form-title">Get a FREE personalized planning session</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset
          key={`fullName-${shakeKey}`}
          className={`form-element ${shakeFields.fullName ? "shake" : ""}`}
        >
          <label htmlFor="fullName">
            Full Name{" "}
            {firstError?.field === "fullName" && (
              <span className="error-message">*{firstError?.message}</span>
            )}
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="eg: jaison.justus"
            value={formData.fullName}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset
          key={`email-${shakeKey}`}
          className={`form-element ${shakeFields.email ? "shake" : ""}`}
        >
          <label htmlFor="email">
            Email{" "}
            {firstError?.field === "email" && (
              <span className="error-message">*{firstError?.message}</span>
            )}
          </label>
          <input
            type="email"
            id="email"
            placeholder="eg: yourname@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset
          key={`phoneNumber-${shakeKey}`}
          className={`form-element ${shakeFields.phoneNumber ? "shake" : ""}`}
        >
          <label htmlFor="phoneNumber">
            Phone Number{" "}
            {firstError?.field === "phoneNumber" && (
              <span className="error-message">*{firstError?.message}</span>
            )}
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="eg: 04713457890"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset
          key={`testOfInterest-${shakeKey}`}
          className={`form-element ${
            shakeFields.testOfInterest ? "shake" : ""
          }`}
        >
          <label htmlFor="testOfInterest">
            Test of Interest{" "}
            {firstError?.field === "testOfInterest" && (
              <span className="error-message">*{firstError?.message}</span>
            )}
          </label>
          <select
            id="testOfInterest"
            value={formData.testOfInterest}
            onChange={handleChange}
          >
            <option value="">Select:</option>
            <option value="doggo">Get a random doggo pic</option>
            <option value="no-thanks">No thanks</option>
          </select>
        </fieldset>

        <button type="submit">SEND</button>
      </form>
      {isSuccessModalVisible && (
        <SuccessModal
          firstName={firstName}
          formData={submittedFormData}
          closeModal={closeModal}
          dogImage={dogImage}
          selectedTestOfInterest={selectedTestOfInterest}
        />
      )}
    </section>
  );
}
