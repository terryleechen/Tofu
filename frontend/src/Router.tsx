import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashBoard from "./Components/Admin/AdminDashboard";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminDashBoard />} />
      </Routes>
    </div>
  );
}
export default Router;
