import React from "react";
import RegForm from "./sub_page/RegForm";

const Register = () => {
  return (
    <div>
      <div className="display-4 py-3 text-center">Register</div>
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="card border-0 mb-4">
            <div className="card-body">
              <RegForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
