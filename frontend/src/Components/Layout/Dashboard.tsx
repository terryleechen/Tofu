import { Disclosure } from "@headlessui/react";
import { Outlet } from "react-router-dom";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Admin", href: "/admin", current: true },
  { name: "Reservations", href: "/admin/reservations", current: false },
  { name: "Return", href: "#123", current: false },
  { name: "Employees", href: "/admin/employees", current: false },
  { name: "Customers", href: "/admin/customers/", current: false },
  { name: "Cars", href: "/admin/cars/", current: false },
  { name: "Statistics", href: "#1236", current: false },
];

function Dashboard() {
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  {/** logo */}
                  <div className="flex flex-shrink-0 items-center">
                    <img className="w-15 h-12" src={require("./car.png")} />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-2xl font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900">
            Dashboard - Admin
          </h1>
        </div>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-4 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                <Outlet />
              </div>
            </div>

            {/* /End replace */}
          </div>
        </main>
      </header>
    </div>
  );
}
export default Dashboard;
