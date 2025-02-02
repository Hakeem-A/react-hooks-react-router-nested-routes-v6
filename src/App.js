import {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then(r => {
        if (!r.ok) throw new Error('Failed to fetch users');
        return r.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={users}/>
    </>
  );
}

export default App;
