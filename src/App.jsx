import { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

import Home from './Components/Pages/Home';
import Icons  from './Helpers/icons';

function App() {
  useEffect(() => {
    Icons();
  }, []);

  return (
    <div>
      <Home />
      <Outlet />
    </div>
  )
}

export default App;
