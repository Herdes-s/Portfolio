import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop.jsx";
import TemaProvider from "./hooks/TemaProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <TemaProvider>
      <App />
    </TemaProvider>
  </BrowserRouter>,
);
