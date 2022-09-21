import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination justify-content-center' style={{"width": "80rem","--bs-pagination-padding-x":"25px","--bs-pagination-padding-y":
            "8px" }}>
                {pageNumbers.map((number, index) => {
                    return (<li key={index} className='page-item '>
                        <Link onClick={() => { paginate(number)}} to="/" style={{ "width": "1.5rem" }} className='page-link '>
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