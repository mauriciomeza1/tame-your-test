import "./SuccessModal.css";

export function SuccessModal({
  firstName,
  formData,
  closeModal,
  dogImage,
  selectedTestOfInterest,
}) {
  return (
    <div className="success-modal-container">
      <div className="success-modal">
        <div className="icon-container">
          <svg className="check-icon" viewBox="0 0 24 24">
            <path d="M20.285 2l-11.285 11.567-5.286-4.845-3.714 4.040 9 8.238 15-15.407z" />
          </svg>
        </div>
        <h3 className="modal-title">Validation Successful</h3>
        <p className="modal-description">
          Hi, {firstName}! Your personalized planning session will be sent to{" "}
          {formData.email}.
        </p>
        {selectedTestOfInterest === "doggo" && dogImage && (
          <div className="doggo-container">
            <h5>Here's a random doggo!</h5>
            <img className="dog-image" src={dogImage} alt="Random Dog" />
          </div>
        )}
        <button className="close-button" onClick={closeModal}>
          Go back to homepage
        </button>
      </div>
    </div>
  );
}
