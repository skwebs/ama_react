import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-muted text-center py-2 d-flex justify-content-around">
        <span>
          <span className="d-none d-md-inline ">
            Copyright &copy; Anshu Memorial Academy
          </span>
          <strong>
            <span className="d-md-none d-inline">&copy; AMA</span>
          </strong>
        </span>

        <span className="ms-3 ms-md-5">
          {" "}
          Created by{" "}
          <Link
            className="text-muted"
            target="_blank"
            to={{ pathname: "https://skwebs.github.io" }}>
            <strong>Satish Kumar Sharma</strong>
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;
