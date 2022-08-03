import './App.css';
import React from 'react';
import Sidemenu from './components/Sidemenu/Sidemenu.jsx';
import PublicRoutes from './routes/PublicRoutes';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';


function App() {
  document.body.style = 'background: #e0e0e0';
  return (
    <div className="App" >
      <Sidemenu/>
      <Box sx={{backgroundColor: grey[300], backgroundSize: "cover",}}>
      <main>
          <PublicRoutes/>
      </main>
      </Box>
    </div>
  )
}

export default App
