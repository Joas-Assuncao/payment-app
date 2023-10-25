import { Route, Routes } from "react-router-dom";

import { Dashboard } from "./pages/dashboard";

export function Router() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
