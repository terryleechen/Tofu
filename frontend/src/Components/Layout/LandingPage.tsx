import { Disclosure } from "@headlessui/react";
import { Outlet } from "react-router-dom";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "ToFu", href: "/", current: true },
  { name: "About", href: "#", current: false },
];

const footerNavigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
};

function LandingPage() {
  return (
    <div className="min-h-full">
      {/* Nav Bar */}
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

      {/* Hero section */}
      <div className="relative">
        <div className="pt-4 mx-auto max-w-full sm:px-6 lg:px-3">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            {/* Hero section wait to add from to for color */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-indigo-700 ">
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
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center ">
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

      {/* Logo Cloud */}
      <div className="pt-2 mx-auto max-w-full sm:px-6 lg:px-3">
        <div className="bg-orange-100 sm:rounded-2xl">
          <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-base font-semibold text-black">
              Our Top 5 Trusted Fleet brands
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src={require("./Honda.png")}
                  alt="Honda"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-10"
                  src={require("./Volvo.png")}
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom middle */}
      <div className="relative">
        <div className="pt-4 mx-auto max-w-full sm:px-6 lg:px-3 ">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl h-96 bg-gradient-to-r from-gray-800 to-indigo-700">
            ??
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="relative">
        <div className="pt-2 mx-auto max-w-full sm:px-6 lg:px-3">
          <div className="mt-24 bg-gray-900 sm:mt-12 sm:rounded-2xl ">
            <div className="mx-auto max-w-md overflow-hidden py-12 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <nav
                className="-mx-5 -my-2 flex flex-wrap justify-center"
                aria-label="Footer"
              >
                {footerNavigation.main.map((item) => (
                  <div key={item.name} className="px-5 py-2">
                    <a
                      href={item.href}
                      className="text-base text-gray-400 hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            <p className="mt-8 text-center text-base text-gray-400">
              &copy; 2020 Tofu Rental, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
