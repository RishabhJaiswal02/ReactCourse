import { Stepper } from "./Stepper";
import { useState } from "react";
import "./App.css";
import { ComponentA, ComponentB, ComponentC } from "./components";

function App() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <Stepper
          listOfComponents={[
            <ComponentA />,
            <ComponentB />,
            <ComponentC />,
            <ComponentA />,
            <ComponentB />,
            <ComponentC />,
            <ComponentA />,
            <ComponentB />,
            <ComponentC />,
            <ComponentA />,
            <ComponentB />,
            <ComponentC />,
          ]}
          setActiveStep={setActiveStep}
          activeStep={activeStep}
        />
      </header>
    </div>
  );
}

export default App;
