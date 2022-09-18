import React from 'react'
import { useState } from 'react'
import Team from './Team'

const Card = (props) => {

    const [show, setshow] = useState(props.item.available)
    const [formTeam, setFormTeam] = useState([])
      
    const handleOnClick=()=>{
        props.storeTeam(props.item)
        setshow(false)
    }


    return (
        <>
            <div className="card" style={{ "width": "22rem" }}>
                {false && <Team formTeam={formTeam}/>}
                <div className="card-body">
                    <h6 className="user-id">Id:-{props.item.id} <br /><b> Name:-</b><i>{props.item.first_name} {" "}{props.item.last_name}</i></h6>
                    <img src={props.item.avatar} style={{ "width": "50px", "height": "50px" }} className="card-img-top" alt="error"></img>
                    <p></p>
                    <p><b>Domain:-</b>{props.item.domain} <br /> <b>Gender:-</b>{props.item.gender} <br /><b>email:-</b>{props.item.email}</p>
                    <p className="card-text">{props.item.body}</p>

                    <div className="show" >
                        {show && <button onClick={handleOnClick} className="btn btn-primary">Add+</button>}
                        {!show && <button disabled className="btn btn-secondary">Not Avail</button>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Card
