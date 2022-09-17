
import './App.css';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Pagination from './components/pagination'; 
import {useEffect,useState} from 'react'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);


  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
        const url = `https://dummyjson.com/users/`
        let data = await fetch(url);
        let parsedData = await data.json();
        setUsers(parsedData.users);
        setLoading(false);
    }
    getUsers();
}, [])

const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage;
const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="container">
        <Info  users={currentUsers} loading={loading} />
        <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
      </div>
    </>
  );
}

export default App;
