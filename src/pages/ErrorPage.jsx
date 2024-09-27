import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError()
  console.log("Error while routing error description: ",error)
  return <div className="text-xl text-center "> <h1>Error Page</h1>
  <h2>Error Happend: {error.statusText || error.message}</h2>
  </div>;
}

export default ErrorPage;
