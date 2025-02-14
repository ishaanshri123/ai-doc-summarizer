import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SummarizePage from './pages/SummarizePage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SummarizePage />} />
    </Routes>
  </Router>
);

export default App;