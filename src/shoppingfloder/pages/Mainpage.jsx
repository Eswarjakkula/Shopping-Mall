import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents,Ladies} from '../data'
import Women from '../components/Women'


const Mainpage = () => {
    
    const[gentsfashion,setgentsfashion]=useState(Gents)
    const[ladiesfashion,setladiesfashion]=useState(Ladies)
  return (
    <div>
        <Header />
        <Banner />
        <Collections gentsfashion={gentsfashion}/>
        <Women ladiesfashion={ladiesfashion}/>
        <Footer />
        
    </div>
  )
}

export default Mainpage