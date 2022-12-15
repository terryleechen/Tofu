import { Routes, Route, Navigate } from "react-router-dom";

import ListEmployees from "./Components/Admin/ListEmployees";
import Dashboard from "./Components/Layout/Dashboard";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          {/* <Route path="/admin" element={<Dashboard />} /> */}

          <Route path="/admin/employees" element={<ListEmployees />} />
        </Route>
      </Routes>
    </div>
  );
}
export default Router;
