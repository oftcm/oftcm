import { Navigate, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { MainPage } from "./pages/MainPage/MainPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";

export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        {/* <Route path="/home" element={<MainPage />} />
        <Route path="/" element={<Navigate to="/home" replace />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="*" element={<MainPage />} />
        <Route path="/" element={<Header />} /> */}
        
      </Routes>

      <Footer />
    </div>
  )
};
