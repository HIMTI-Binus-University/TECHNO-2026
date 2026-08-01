import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FAQPage from './pages/FAQPage'
import ComingSoon from './pages/ComingSoon'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ComingSoon title="Home" />} />
        <Route path="/events" element={<ComingSoon title="Events" />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/register" element={<ComingSoon title="Register" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
