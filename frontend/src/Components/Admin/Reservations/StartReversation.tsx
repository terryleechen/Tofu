import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { DRIVER_LICENSE_API } from "../../../API_URI";

import NewCustomer from "../../Layout/NewCustomer";

type Customer = {
  CustomerID: string;
  FirstName: string;
  LastName: string;
  DriverLicense: string;
  DOB: string;
  Address: string;
  City: string;
  Province: string;
  PostalCode: string;
  Email: string;
  GoldStatus: boolean;
};

function StartRevservation() {
  const navigate = useNavigate();
  const [search, setSearch] = useState<Customer[]>([] as Customer[]);

  useEffect(() => {}, []);

  const handleClick = (event: any) => {
    event.preventDefault();

    navigate("/admin/customers/new");
  };

  const handleSearch = (event: any) => {
    axios.get(DRIVER_LICENSE_API + event.target.value).then((res) => {
      if (res.data.length > 0) {
        console.log(res.data);
        setSearch(res.data);
      }
    });
  };

  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        {/** customer search title */}
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Customer Search:
            </h3>
          </div>

          {/** Search bar */}
          <div className="flex flex-1 justify-between px-4 ">
            <div className="flex flex-1 ">
              <form className="flex w-full md:ml-0" action="#" method="GET">
                {/** search action */}
                <label className="sr-only">Search</label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search-field"
                    className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-black placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 text-xl"
                    placeholder="Search"
                    type="search"
                    name="search"
                    onChange={handleSearch}
                  />
                </div>
              </form>
            </div>
          </div>

          {/** button */}
          <div className="ml-4 mt-2 flex-shrink-0">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleClick}
            >
              Add new Customer
            </button>
          </div>
        </div>
      </div>

      {/** table */}
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Customer ID
              </th>

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
                Driver License
              </th>

              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {/** table body */}
          <tbody className="divide-y divide-gray-200 bg-white">
            {/** this customers that have the driver license incase duplicate account */}
            {Object.keys(search).map(function (index) {
              let i: number = +index;
              return (
                <tr key={search[i].CustomerID}>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {search[i].CustomerID}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {search[i].FirstName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {search[i].LastName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {search[i].DriverLicense}
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    {/** EDIT HREF */}
                    <a
                      // this makes edit text clickable
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 text-xl"
                    >
                      Reserse
                      <span className="sr-only">{search[i].CustomerID}</span>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default StartRevservation;
