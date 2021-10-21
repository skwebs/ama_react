import React, { useState } from "react";

const RegForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(
      `Submitting Data 
    \nFirst Name:${firstName} \nMiddle Name:${middleName} \nLast Name:${lastName} 
    \nMother:${mother} \nFather:${father}
    \nGender:${gender} \nDate of Birth:${dob}
    \nMobile:${mobile} \nEmail:${email}
    \nAddress:${address}`
    );
  };

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mother, setMother] = useState("");
  const [father, setFather] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  return (
    <>
      <div class="containe p-2 overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div class="row gy-2">
            <div class="col-md-4">
              <div className="form-floating">
                <input type="text" className="form-control" onChange={(e) => setFirstName(e.target.value)} id="firstName" placeholder="First Name" />
                <label htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div class="col-md-4">
              <div className="form-floating">
                <input type="text" className="form-control" onChange={(e) => setMiddleName(e.target.value)} id="middleName" placeholder="Middle Name" />
                <label htmlFor="middleName">Middle Name</label>
              </div>
            </div>
            <div class="col-md-4">
              <div className="form-floating">
                <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} id="lastName" placeholder="Last Name" />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>

            <div class="col-md-6">
              <div className="form-floating">
                <input type="text" className="form-control" onChange={(e) => setMother(e.target.value)} id="mother" placeholder="Mother's Name" />
                <label htmlFor="mother">Mother's Name</label>
              </div>
            </div>
            <div class="col-md-6">
              <div className="form-floating">
                <input type="text" className="form-control" onChange={(e) => setFather(e.target.value)} id="father" placeholder="Father's Name" />
                <label htmlFor="father">Father's Name</label>
              </div>
            </div>

            <div class="col-md-6">
              <div className="form-floating">
                <input type="text" className="form-control" onChange={(e) => setGender(e.target.value)} id="gender" placeholder="Gender" />
                <label htmlFor="gender">Gender</label>
              </div>
            </div>
            <div class="col-md-6">
              <div className="form-floating">
                <input type="date" className="form-control" onChange={(e) => setDob(e.target.value)} id="dob" placeholder="Date of Birth" />
                <label htmlFor="dob">Date of Birth</label>
              </div>
            </div>

            <div class="col-md-6">
              <div className="form-floating">
                <input type="tel" className="form-control" onChange={(e) => setMobile(e.target.value)} id="mobile" placeholder="Mobile" />
                <label htmlFor="mobile">Mobile</label>
              </div>
            </div>
            <div class="col-md-6">
              <div className="form-floating">
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" />
                <label htmlFor="email">Email</label>
              </div>
            </div>

            <div classname="col-md-12">
              <div className="form-floating">
                <textarea className="form-control" onChange={(e) => setAddress(e.target.value)} placeholder="Address" id="address" defaultValue={""} />
                <label htmlFor="address">Address</label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>

          </div>
        </form>
      </div>

    </>
  );
};

export default RegForm;
