import { useState } from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import TherapeuticTitre from './components/TherapeuticTitre'
import Therapeutic from './components/Therapeutic'
import Evaluation from './components/Evaluation'
import Innovation from './components/Innovation'
import GlobalPresence from './components/GlobalPresence'
import PartnerCTA from './components/PartnerCTA'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import AdminButton from './components/AdminButton'
import LoginSidebar from './components/LoginSidebar'

import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
     <Navbar/>
     <Home/>
     <TherapeuticTitre />
     <Therapeutic/>
     <Evaluation/>
     <Innovation/>
     <GlobalPresence/>
     <PartnerCTA/>
     <Footer/>
     <Copyright/>
     <AdminButton onClick={() => setIsSidebarOpen(true)}/>
     <LoginSidebar 
      isOpen={isSidebarOpen} 
      onClose={() => setIsSidebarOpen(false)} 
    />

    </>
  )
}

export default App
