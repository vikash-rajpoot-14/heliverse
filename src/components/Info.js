import React, { useEffect } from 'react'
import Card from './Card'



const Info = ({ users, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
      }

    return (
        <>
            <div className="container">
                <h1>User Details</h1>
                <div className="row">
                    {users.map((item) => {
                        return (<div key={item.id} className="container col-md-4 my-3">
                            <Card title={item.title} email={item.email} contact={item.phone} birthDate={item.birthDate} gender={item.gender} id={item.id} firstname={item.firstName} domain={item.domain} lastname={item.lastName} image={item.image} />
                        </div>
                        )
                    })}
                </div>

            </div>
            
        </>
    )
}

export default Info