import React, { FC } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './routes/main';

const App: FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Router>
);

export default App;
