import React from 'react'
import Card from './Card'
import Pagination from './pagination';
import { useState, useEffect } from 'react'

function Info(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(20);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            const url = `http://localhost:5000/users`
            let parsedData = await fetch(url);
            let users = await parsedData.json()
            setUsers(users);
            console.log(users)
            setLoading(false);
        }
        getUsers();
    }, [])

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (page) => {
        setCurrentPage(page);
    }
    const handleOnChange=(e)=>{
        setSearchTerm(e.target.value)
    }

    return (
        <>
            <div className="container">
                <h1>User Details</h1>
                <form className="d-flex">
                    <input className="form-control me-2" onChange={handleOnChange} type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div className="row">
                    {currentUsers.filter((val)=>{
                       if(searchTerm===''){
                        return val;
                       }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                       }else if(val.gender.toLowerCase().includes(searchTerm.toLowerCase())){
                           return val
                       }else{
                        return val
                       }
                    }).map((item) => {
                        return (<div key={item.id} className="container col-md-4 my-3">
                            <Card storeTeam={props.storeTeam} item={item} />
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="container">
                <Pagination
                    usersPerPage={usersPerPage}
                    totalUsers={users.length}
                    paginate={paginate}
                />
            </div>

        </>
    )
}

export default Info
