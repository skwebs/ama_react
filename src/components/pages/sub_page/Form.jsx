import React, { useState } from "react";

const Form = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(
      `Submitting Data \nName:${name} \nFather:${father} \nEmail:${email} \nMessage:${message}`
    );
  };

  const [name, setName] = useState();
  const [father, setFather] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  return (
    <>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="father" className="form-label">
                Father's Name
              </label>
              <input
                type="text"
                className="form-control"
                id="father"
                placeholder="Father's Name"
                onChange={(e) => setFather(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={3}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
