import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EMPLOYEES_API, EMPLOYEE_ID_API } from "../../API_URI";

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

function ListEmployee({ setEmployee }: { setEmployee: any }) {
  const [employees, setEmployees] = useState<Employee[]>([] as Employee[]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(EMPLOYEES_API).then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const handleClick = (event: any) => {
    event.preventDefault();
    //console.log(EMPLOYEE_ID_API + event.target.children[0].innerHTML);
    axios
      .get(EMPLOYEE_ID_API + event.target.children[0].innerHTML)
      .then((res) => {
        setEmployee(res.data);
        navigate("/admin/employees/edit");
      });
  };
  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          {/** temployee listing title */}
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Employee Listing
            </h3>
          </div>
          {/** button */}
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add new employee
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                First Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Last Name
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Role
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {/** table body */}
          <tbody className="divide-y divide-gray-200 bg-white">
            {/** this employees */}
            {employees.map((employee) => (
              <tr key={employee.EmployeeID}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  {employee.FirstName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {employee.LastName}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {employee.Email}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {employee.BranchID}
                </td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  {/** edit button */}
                  <a
                    // this makes edit text clickable
                    href="/admin/employees/edit"
                    className="text-indigo-600 hover:text-indigo-900 text-xl"
                    onClick={handleClick}
                  >
                    Edit<span className="sr-only">{employee.EmployeeID}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ListEmployee;
