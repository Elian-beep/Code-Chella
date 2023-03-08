import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Info from './pages/Info';
import Map from './pages/Map';
import Ticket from './pages/Ticket';
import Acquired from './pages/Ticket/Acquired';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='experience' element={<Experience />} />
          <Route path='map' element={<Map />} />
          <Route path='info' element={<Info />} />
          <Route path='ticket' element={<Ticket />} />
          <Route path='acquired' element={<Acquired />} /> {/* AQUIRED DEVE IR DENTRO DE TICKET */}
        </Routes>
        {/* RODAPÉ */}
      </Router>
    </main>
  );
}