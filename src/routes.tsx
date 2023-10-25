import { Navigate, Route, Routes } from "react-router-dom";

import { Customer } from "./pages/customers";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Customer />} />
    </Routes>
  );
}
