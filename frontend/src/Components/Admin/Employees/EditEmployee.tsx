import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

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

function EditEmployee({ employee }: { employee: Employee }) {
  const [open, setOpen] = useState(true);
  const [tempEmployee, setTempEmployee] = useState<Employee>(employee);

  useEffect(() => {
    console.log(employee);
    setTempEmployee(employee);
  }, [employee]);

  {
    /* START ON CHANGE SECTION */
  }

  const handleFirstNameChange = (e: any) => {
    console.log(e.target.value);
    setTempEmployee({ ...tempEmployee, FirstName: e.target.value });
  };

  const handleLastNameChange = (e: any) => {
    console.log(e.target.value);
    setTempEmployee({ ...tempEmployee, LastName: e.target.value });
  };

  const handleEmailChange = (e: any) => {
    console.log(e.target.value);
    setTempEmployee({ ...tempEmployee, Email: e.target.value });
  };
  {
    /* END ON CHANGE SECTION */
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div>
                    <h3 className="text-xl font-bold leading-6 text-blue-100">
                      Personal Information
                    </h3>
                    <p className="mt-1 text-sm text-white">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    {/* FIRST NAME */}
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-xl font-medium text-white"
                      >
                        First Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          value={tempEmployee.FirstName}
                          onChange={handleFirstNameChange}
                          autoComplete="given-name"
                          className="block w-full rounded-md border-gray-300 shadow- focus:border-indigo-500 focus:ring-indigo-500 text-xl"
                        />
                      </div>
                    </div>

                    {/* LAST NAME */}
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-xl font-medium text-white"
                      >
                        Last Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          value={tempEmployee.LastName}
                          onChange={handleLastNameChange}
                          autoComplete="given-name"
                          className="block w-full rounded-md border-gray-300 shadow- focus:border-indigo-500 focus:ring-indigo-500 text-xl"
                        />
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="email"
                        className="block text-xl font-medium text-white"
                      >
                        Email Address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={tempEmployee.Email}
                          onChange={handleEmailChange}
                          autoComplete="email"
                          className="block w-full rounded-md border-gray-300 shadow- focus:border-indigo-500 focus:ring-indigo-500 text-xl"
                        />
                      </div>
                    </div>

                    {/* ADDRESS*/}
                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* CITY */}
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* PROVINCE */}
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    {/* POSTAL CODE */}
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
export default EditEmployee;
