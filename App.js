import React from "react";
import ReactDOM from "react-dom/client";
const title = (
  <div>
    <h2>hi ye</h2>{" "}
  </div>
);

function HeadingComponent() {
  return <h1>{<HeadingComponent1 />}Hi</h1>;
}
function HeadingComponent1() {
  return <h1>Hi HeadingComponent1</h1>;
}

const element2 = (
  <h1 className="root">Hi i am setting up react project from scratch </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
