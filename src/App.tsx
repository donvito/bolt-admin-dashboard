import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import ImageGenerations from './pages/ImageGenerations';
import Wallets from './pages/Wallets';
import Transactions from './pages/Transactions';
import Loras from './pages/Loras';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/generations" element={<ImageGenerations />} />
              <Route path="/wallets" element={<Wallets />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/loras" element={<Loras />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;