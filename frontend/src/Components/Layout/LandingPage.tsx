import { Disclosure } from "@headlessui/react";
import { Outlet } from "react-router-dom";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "ToFu", href: "/", current: true },
  { name: "About", href: "#", current: false },
];

function LandingPage() {
  return (
    <div className="min-h-full">
      <div className="relative">
        <div className="pt-2 mx-auto max-w-full sm:px-6 lg:px-3">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <Disclosure as="nav" className="bg-gray-800 ">
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                      <div className="flex items-center">
                        {/** logo */}
                        <div className="flex flex-shrink-0 items-center">
                          <img
                            className="w-15 h-12"
                            src={require("./car.png")}
                          />
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
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="pt-4 mx-auto max-w-full sm:px-6 lg:px-3">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={require("./adventure.jpg")}
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-r" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-neutral-900">
                  Whatever your choice
                </span>
                <span className="block text-yellow-400">Adventure awaits</span>
              </h1>
              {/* <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p> */}
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                  >
                    Sign Up
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center rounded-md border border-transparent bg-gray-700 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                  >
                    Rent Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
