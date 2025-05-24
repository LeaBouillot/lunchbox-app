import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Join from './routes/Join';
import Main from './routes/Main';
import MyOrder from './routes/MyOrder';
import Order from './routes/Order';
import Loading from './components/Login/Loading';
import LoginMain from './components/Login/LoginMain';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<LoginMain />} /> 
        <Route path="/join" element={<Join />} />
        <Route path="/main" element={<Main />} />
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
};

export default App;
