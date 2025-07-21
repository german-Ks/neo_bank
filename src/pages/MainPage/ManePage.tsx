import { Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import "./style.css";
import { CreditCardPage } from "../CreditCardPage/CreditCardPage";

export const MainPage = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/credit-card" element={<CreditCardPage />} />
      <Route path="/product" element={<CreditCardPage />} />
      <Route path="/account" element={<CreditCardPage />} />
      <Route path="/resources" element={<CreditCardPage />} />
    </Routes>
  );
};
