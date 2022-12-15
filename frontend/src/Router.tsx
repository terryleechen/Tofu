import { Routes, Route, Navigate } from "react-router-dom";
import MainView from "./Components/Layout/MainView";
import AdminDashBoard from "./Components/Admin/AdminDashboard";
import AddEmployee from "./Components/Admin/Employee/AddEmployee";
import ListEmployees from "./Components/Admin/Employee/ListEmployees";
import Dashboard from "./Components/Layout/Dashboard";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Dashboard />}>
          {/* <Route path="/admin" element={<Dashboard />} /> */}
          <Route path="/admin/add" element={<AddEmployee />} />
          <Route path="/admin/employees" element={<ListEmployees />} />
        </Route>
      </Routes>
    </div>
  );
}
export default Router;
