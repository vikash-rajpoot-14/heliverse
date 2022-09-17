import React from 'react'
import { useState } from 'react'

const Card = (props) => {

    const [show, setshow] = useState(true)
    const handleClick=()=>{
             setshow(false)

    }
    return (
        <>
            <div className="card" style={{ "width": "18rem" }}>
                <div className="card-body">
                    <h6 className="user-id">Id:-{props.id}   Name: <i>{props.firstname+" "+props.lastname}</i></h6>
                    <img src={props.image} style={{"width":"50px","height":"50px"}}class="card-img-top" alt="error"></img>
                    <p><b>Domain:-</b>{props.domain}</p>
                    <p></p>
                    <p><b>Gender:-</b>{props.gender} <br /><b> contact:-</b>{props.contact} <br /> <b>email:-</b>{props.email} <br /><b>birthDate:-</b>{props.birthDate}</p>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                
                    <div className="show" >
                    { show &&<button  onClick={handleClick} className="btn btn-primary">Add+</button> }
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Card
