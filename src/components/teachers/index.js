import React from 'react'

    const Teachers = ({ teachers }) => {
      return (
        <div>
          <center><h1>Teachers List</h1></center>
          {teachers.map((teacher) => (
            <div key={teacher.id} class="card">
              <div className="card-body">
                <h5 className="card-title">{teacher.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{teacher.email}</h6>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Teachers;