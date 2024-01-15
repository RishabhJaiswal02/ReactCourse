export const Stepper = ({ listOfComponents, setActiveStep, activeStep }) => {
  const handlePrevious = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };
  const handleNext = () => {
    if (listOfComponents.length > activeStep) setActiveStep(activeStep + 1);
  };
  return (
    <div className="container">
      <div className="stepperContainer">
        {listOfComponents.map((_, index) => {
          return (
            <div className={`step ${activeStep > index ? "activeStep" : null}`}>
              <h6>Step {index + 1}</h6>
            </div>
          );
        })}
      </div>
      <div>{listOfComponents[activeStep - 1]}</div>
      <button onClick={handlePrevious}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
