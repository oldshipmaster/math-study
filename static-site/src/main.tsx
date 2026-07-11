import React from "react";
import ReactDOM from "react-dom/client";
import { MathLab } from "../../components/MathLab";
import "../../app/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MathLab />
  </React.StrictMode>,
);
