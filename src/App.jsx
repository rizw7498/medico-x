import './App.css'
import Footer from './components/Footer/Footer'
import Howithelps from './components/Help/Howithelps'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Trust from './components/Trust/Trust'
import Uses from './components/Uses/Uses'
import Loader from './components/Loader/Loader'
import React, { useState, useEffect } from "react";
import Progress from './components/Progress/Progress'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay (you can replace this with real API loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout as needed
  }, []);
  return (
    <div style={{width:'100%',overflowX:'hidden'}}>
 {loading ? (
      <Loader />
    ) : (
      <main className=''>
      <Navbar />
      <Progress/>
      <Hero/>
      <Howithelps/>
      <Uses/>
      <Trust/>
      <Footer/>
    </main>
    )}
    </div>
 
  )
}

export default App
