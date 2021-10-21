import React from "react";
import Form from "./sub_page/Form";

const Contact = () => {
  return (
    <div>
      <div className="display-1 py-5 text-center">Contact</div>
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card mb-4">
            <div className="card-body">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
