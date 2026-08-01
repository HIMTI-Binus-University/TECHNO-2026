import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQPage from './pages/FAQPage'
import EventsPage from './pages/EventsPage'
import ComingSoon from './pages/ComingSoon'
import HomePage from './pages/home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/register" element={<ComingSoon title="Register" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
