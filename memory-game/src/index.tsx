import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // App 컴포넌트를 가져옵니다

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
