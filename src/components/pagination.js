import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
const [pageN, setPageN] = useState(1)

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }
    const handleOnClick=(number)=>{
         setPageN(number)
    }
    return (
        <nav>
            <ul className='pagination justify-content-center' style={{ "width": "80rem" }}>
                {pageNumbers.map((number, index) => {
                    return (<li key={index} className='page-item '>
                        <Link onClick={() => { paginate(number);handleOnClick(number) }} to="/" style={{ "width": "1.5rem" }} className='page-link '>
                            {number}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export default Pagination;