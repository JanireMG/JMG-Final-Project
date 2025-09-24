import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import Icons  from './Helpers/icons';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    Icons();

    axios
      .get(
        "http://localhost:5000/api/session", 
        { withCredentials: true }
      )
      .then(res => {
        if(res.data.loggedIn){
          setLoggedIn(true);
        }
      }).catch(
        err => console.error("Error en sesión:", err)
      );
  }, []);

  return (
    <div> 
      <Outlet context={{ loggedIn, setLoggedIn }}/>
    </div>
  );
}

export default App;
