import React from 'react'
import { Link } from 'react-router-dom'

function Team(props) {

  console.log(props)
  return (
    <div className='container'>
      <h2>Team Members</h2>
      <div className="row">
        {props?.tempData?.map((item) => {
          return (
            <div key={item.id} className="card col-md-4 mx-3 my-3" style={{ "width": "22rem" }}>
              <p><b>Id:-</b>{item.id} <br /> <b>Name:-</b>{item.first_name}{" "}{item.last_name}</p>
              <img src={item.avatar} style={{ "width": "50px", "height": "50px" }} className="card-img-top" alt="error" />
              <div className="card-body">
                <p className="card-text"><b>Domain:-</b>{item.domain} <br /><b>gender:-</b>{item.gender} <br /> <b>email:-</b>{item.email} <br />
                  <b></b></p>
                <Link to="#" disabled className="btn btn-secondary">added</Link>
              </div>
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default Team
