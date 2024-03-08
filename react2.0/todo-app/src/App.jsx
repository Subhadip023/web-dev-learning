import { useState, useEffect } from 'react'

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: "/",
    element: <>
<Navbar/>

    <Home /></>
  },
  {
    path: "/about",
    element: <><Navbar/>
    <About /></>
  },])
function App() { 

  return (
    < >
 <RouterProvider router={router} />
    </>
  )
}

export default App