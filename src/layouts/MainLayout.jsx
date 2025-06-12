import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/MainLayout.css'

function MainLayout() {
  return (
    <>
    <header className="header">
        <div className="logo">
            📱 MiLogo
        </div>
        <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout
