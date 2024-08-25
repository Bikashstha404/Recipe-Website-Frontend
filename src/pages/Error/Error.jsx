import React from 'react';
import './Error.css';
import errorImage from './404Error.jpg'

export default function ErrorPageNotFound() {
  return (
    <>
      <main className="body grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
        <p className="text-4xl font-bold text-black-500">Error</p>
          <div className="error-logo-container">
            <img src={errorImage} alt="Error 404" className="error-logo"/>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
