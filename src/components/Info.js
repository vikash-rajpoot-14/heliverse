import React from 'react'
import Card from './Card'
import Pagination from './pagination';
import { useState, useEffect } from 'react'
import e from 'cors';

function Info(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(20);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")
    const [Gender, setGender] = useState("select-option")
    const [Domain, setDomain] = useState("select-option")
    const [Avail, setAvail] = useState("select-option")
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            const devEnv = process.env.NODE_ENV !== "production";
            const { REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
            const url = ` ${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}`
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

    return (
        <>
            <div className="container">
                <h1>User Details</h1>
                <p>search:{searchTerm} gender:{Gender} domain:{Domain} Avail:-{Avail}</p>
                <div className="selection d-flex flex-row" >
                    <div className="select " style={{ "padding": "1.5rem" }}>
                    <h4>Search</h4>
                        <form className="form d-">
                            <input className="form-control me-2" style={{ "width": "12rem" }} value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value) }} type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    <div className="select " style={{ "padding": "1rem" }}>
                        <h4>domain</h4>
                        <select className="domain"  onChange={(e)=>{setDomain(e.target.value)}} style={{ "width": "12rem", "padding": "0.5rem", "margin": "0.5rem" }} aria-label="Default select example">
                            <option defaultChecked>select-option</option>
                            <option value="Sales">Sales</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="IT">IT</option>
                            <option value="Management">Management</option>
                            <option value="UI Designing">UI Designing</option>
                            <option value="Business Development">Business Development</option>
                        </select>
                    </div>
                    <div className="select" style={{ "padding": "1rem" }}>
                        <h4>gender</h4>
                        <select className="gender" onChange={(e)=>{setGender(e.target.value)}} style={{ "width": "12rem", "padding": "0.5rem", "margin": "0.5rem" }} aria-label="Default select example">
                            <option defaultChecked>select-option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Agender">Agender</option>
                            <option value="Bigender">Bigender</option>
                            <option value="Non-binary">Non-binary</option>
                            <option value="Polygender">Polygender</option>
                            <option value="Genderfluid">Genderfluid</option>
                            <option value="Genderqueer">Genderqueer</option>
                        </select>
                    </div>
                    <div className="select " style={{ "padding": "1rem" }}>
                        <h4>availability</h4>
                        <select className="availibility"  onChange={(e)=>{setAvail(e.target.value)}} style={{ "width": "12rem", "padding": "0.5rem", "margin": "0.5rem" }} aria-label="Default select example">
                            <option defaultChecked>select-option</option>
                            <option value={true}>Available</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    {currentUsers.filter((item)=>{
                        if(searchTerm===""){
                            return item
                        }else if(item.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return item
                        }
                    }).filter((item)=>{
                        if(Gender==="select-option"){
                            return item
                        }else if(item.gender.includes(Gender)){
                            return item
                        }
                    }).filter((item)=>{
                        if(Domain==="select-option"){
                            return item
                        }else if(item.domain.includes(Domain)){
                            return item
                        }
                    }).filter((item)=>{
                        if(Avail==="select-option"){
                            return item
                        }else if(item.available?item:!item){
                            return item
                        }
                    }).map((item) => {
                        return (<div key={item.id} className="container col-md-4 my-3">
                            <Card storeTeam={props.storeTeam} item={item} />
                        </div>
                        )
                    })
                    }
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
