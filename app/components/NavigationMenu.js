import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeProvider from './ThemeProvider'
import { useContextProvider } from './UserContext'
import Gravatar from 'react-gravatar';

//TODO: complete color-change when clicking. Only CSS missing
export default function NavBar() {
  const [active, setActive] = useState(false);
  const { user, email } = useContextProvider();

  useEffect(() => {
    return () => {
      setActive(false);
    };
  }, []);

  return (
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center">
        <div className="flex items-center p-2 space-x-3">
          <img className="w-10 h-10 object-cover" src={"logo_site.png"} alt="post" /> 
          <span className="text-gray-900 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hvordan går det?</span>
        </div>
      </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto flex items-center" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center">
              <Link 
                href="/" 
                className={`block py-2 pl-3 pr-4 ${
                  active ? 'text-blue-300' : 'text-black'
                } rounded ${
                  active ? 'hover:text-blue-300' : 'hover:text-blue-700'
                } md:border-0 md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                onClick={() => setActive(true)}
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link 
                href="/about" 
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => setActive(true)}
              >
                About
              </Link>
            </li>
            <li className="flex items-center">
              <Link 
                href="/articles" 
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={() => setActive(true)}
              > 
                Articles
              </Link>
            </li>
            <li className="flex items-center">
              <Link 
                href="/contacts" 
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contacts
              </Link>
            </li>
            <li className="flex items-center">
              <Link 
                href="" 
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <ThemeProvider/>
              </Link>
            </li>

            {user ? (
              <Link href="/settings" className="w-35 flex items-center border p-2 rounded-lg">
                <Gravatar className="rounded-full " email={email} size={25} />
                <span className="ml-2 text-black dark:text-white">{user}</span>
              </Link>
            ) : (
              <li className="flex items-center">
                <Link 
                  href="/login" 
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

        </div>
      </div>
    </nav>
    
  );
};

