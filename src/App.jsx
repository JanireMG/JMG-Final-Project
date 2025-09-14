import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Icons  from './Helpers/icons';

function App() {
  useEffect(() => {
    Icons();
  }, []);

  return (
    <div> 
      <Outlet />
    </div>
  );
}

export default App;
