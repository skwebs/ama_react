import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="py-5 text-center text-secondary">
        <div className="display-1 bold">
          <strong>404</strong>
        </div>
        <h1 className="text-center">Page not found.</h1>
        <div className="mt-4 h1">
          <Link to="/home">Home</Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
