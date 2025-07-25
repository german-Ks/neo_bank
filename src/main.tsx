import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainPage } from "./pages/MainPage/ManePage.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </StrictMode>
);
