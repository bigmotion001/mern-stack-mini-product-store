

import { Box } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Create } from './pages/Create';
import  { Toaster } from "react-hot-toast";
import Edit from './pages/Edit';




function App() {
  

  
  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
       
      </Routes>
      <Toaster />
    </Box>
  )
}

export default App
