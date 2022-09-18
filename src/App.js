import React, { useState }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Team from './components/Team';
import Info from './components/Info';



function App() {
  const [formTeam, setFormTeam] = useState([])

  const storeTeam = (teamData) => {
    const tempData=[...formTeam,teamData]
    setFormTeam(tempData)
  
}
  return (
    <>
      <BrowserRouter>
        <Navbar  />
        <Routes>
          <Route path="/" element={<Info storeTeam={storeTeam}/>}>
          </Route>
          <Route path="/formteam" element={<Team tempData={formTeam}  />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
