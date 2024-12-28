import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Index from './Index.jsx'; 
import Home from './Home.jsx';
import Popular from './Popular.jsx'; 
import TopRated from './TopRated.jsx';  
import Upcoming from './Upcoming.jsx';  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Index>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
        </Routes>
      </Index>
    </Router>
  </StrictMode>,
);
