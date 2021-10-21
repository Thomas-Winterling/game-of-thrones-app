import { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'
import Header from './components/Header'
import House from './components/House'

function App() {
  const [houses, setHouses] = useState([])

  useEffect(() => {
    const getHouses = async () => {
      const allHouses = await fetchHouses()
      setHouses(allHouses)
    }
    getHouses()
  }, [])

  // Fetch Houses
  const fetchHouses= async () => {
    const res = await fetch('https://anapioficeandfire.com/api/houses/')
    const data = await res.json()

    return data
  }

  return (
    <div className="app">
      <Header />
      <Table striped bordered hover>
                <thead>
                    <tr>
                      <th>Name of the houses</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {houses.map(house => (
                  <House key={house.name} house={house} />
                ))}
            </tbody>
        </Table>
    </div>
  );
}

export default App;
