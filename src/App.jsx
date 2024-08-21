import React from 'react';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import { Toaster } from 'react-hot-toast';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <TransactionTable />
      <Toaster />
    </div>
  );
}

export default App;
