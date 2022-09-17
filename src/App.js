
import './App.css';
import Info from './components/Info';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Info />
      </div>
    </>
  );
}

export default App;
