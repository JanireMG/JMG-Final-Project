import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import Icons  from './Helpers/icons';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
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
          setUser(res.data.user);
        }
      }).catch(
        err => console.error("Error en sesión:", err)
      );
  }, []);

  return (
    <div> 
      <Outlet context={{ loggedIn, setLoggedIn, user, setUser }}/>
    </div>
  );
}

export default App;
