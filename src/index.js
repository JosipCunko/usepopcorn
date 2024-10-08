import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./js/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      messages={["Terrible", "Bad", "OK", "Good", "Amazing"]}
      defaultRating={3}
      onSetRating={() => console.log("External rating")}
    /> */}
  </React.StrictMode>
);
