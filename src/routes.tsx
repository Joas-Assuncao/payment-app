import { Navigate, Route, Routes } from "react-router-dom";

import { Customers } from "./pages/Customers";
import { Payments } from "./pages/Payments";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/customers" />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/payments" element={<Payments />} />
    </Routes>
  );
}
