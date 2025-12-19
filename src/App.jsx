import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import PricingPage from "./pages/pricing";
import HomePage from "./pages/Home";
import "./assets/styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/home" element={<HomePage />} />


        {/* catch-all route must be LAST */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
