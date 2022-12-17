import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./Components/Layout/Dashboard";
import EditEmployee from "./Components/Admin/Employees/EditEmployee";
import ListEmployees from "./Components/Admin/Employees/ListEmployees";

import LookupCustomers from "./Components/Admin/Customers/LookupCustomers";
import NewCustomer from "./Components/Layout/NewCustomer";
import LandingPage from "./Components/Layout/LandingPage";

import StartRevservation from "./Components/Admin/Reservations/StartReversation";

type Employee = {
  BranchID: string;
  FirstName: string;
  LastName: string;
  HireDate: string;
  Address: string;
  City: string;
  DOB: string;
  Email: string;
  EmployeeID: string;
  PostalCod: string;
  Province: string;
  Supervisor: boolean;
};

function Router() {
  const [employee, setEmployee] = useState<Employee>({} as Employee);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route
            path="/admin/employees/"
            element={<ListEmployees setEmployee={setEmployee} />}
          />

          <Route
            path="/admin/employees/edit"
            element={<EditEmployee employee={employee} />}
          />
          <Route path="/admin/customers/" element={<LookupCustomers />} />
          <Route path="/admin/reservations/" element={<StartRevservation />} />
          <Route path="/admin/customers/new" element={<NewCustomer />} />
        </Route>
      </Routes>
    </div>
  );
}
export default Router;
