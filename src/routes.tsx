import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        {/* HEADER */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}