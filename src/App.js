import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage';
import SubPage1 from './component/SubPage1';
import SubPage2 from './component/SubPage2';

function App() {
  return (
    
    <Router><h1>Hello</h1>test
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subpage1" element={<SubPage1 />} />
        <Route path="/subpage2" element={<SubPage2 />} />
      </Routes>
    </Router>
  );
}

export default App;
