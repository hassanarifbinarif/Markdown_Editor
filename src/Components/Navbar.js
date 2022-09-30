import { useState } from "react";
import { NavLink } from "react-router-dom";
import MarkdownLogo from "../assets/markdownlogo.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <nav className="w-full bg-gray-800 shadow-xl">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <NavLink to="/">
                <img
                  src={MarkdownLogo}
                  class="inline-block mr-3 h-16 sm:h-9 bg-grau-800"
                  alt="Markdown Logo"
                />
                <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
                  Markdown Editor
                </span>
              </NavLink>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-100 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-blue-600">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-white hover:text-blue-600">
                  <NavLink to="/mdeditor">Editor</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav class="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" class="flex items-center">
            <img
              src={MarkdownLogo}
              class="inline-block mr-3 h-16 sm:h-9 bg-grau-800"
              alt="Markdown Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-white">
              Markdown Editor
            </span>
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
            id="navbar-default"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 bg-gray-800 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <NavLink
                  to="/"
                  class="block py-2 pr-4 pl-3 md:border-0 md:p-0"
                >
                  <span className="text-white md:hover:text-indigo-500 font-bold">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mdeditor"
                  class="block py-2 pr-4 pl-3 text-white md:border-0 md:p-0"
                >
                  <span className="text-white md:hover:text-indigo-500 font-bold">Editor</span>
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}
