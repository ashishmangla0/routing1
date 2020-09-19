import React from 'react';
import { Link } from 'react-router-dom';
import Routes from './routes'


function App() {
  return (
<>
<Routes/>
<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
</>

  
  );
}

export default App;



// function Home() {
//   return <h2>Home</h2>;
// }



function Users() {
  return <h2>Users</h2>;
}