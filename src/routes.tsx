import { Navigate, Route, Routes } from "react-router-dom";

import { Customers } from "./pages/Customers";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/customers" />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}
