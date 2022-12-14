import { Routes, Route, Navigate } from "react-router-dom";
import MainView from "./Components/Layout/MainView";
import AdminDashBoard from "./Components/Admin/AdminDashboard";
import AddEmployee from "./Components/Admin/Employee/AddEmployee";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainView />}>
          <Route path="/admin" element={<AdminDashBoard />} />
          <Route path="/admin/add" element={<AddEmployee />} />
        </Route>
      </Routes>
    </div>
  );
}
export default Router;
