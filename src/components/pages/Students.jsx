import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Studensts = () => {
  const [stuData, setStuData] = useState([]);
  useEffect(() => {
    axios.get(`https://anshumemorial.in/api/api/v1/user`)
      .then((response) => {
        console.log(response.data)
        setStuData(response.data);
      })
  }, []);

  const onDelete = (id) => {
    alert(id);
  }
  const onUpdate = (id) => {
    alert(id);
  }

  return (
    <div className="students-table">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Created</th>
              <th scope="col">Updated</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {stuData.map((data) => {
              return (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.created_at}</td>
                  <td>{data.updated_at}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Action Buttons">
                      <button onClick={() => onDelete(data.id)} type="button" className="btn btn-primary">Update</button>
                      <button onClick={() => onUpdate(data.id)} type="button" className="btn btn-danger">Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Studensts
