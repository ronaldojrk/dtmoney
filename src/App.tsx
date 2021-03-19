import React, { useState } from "react";

import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionsModal } from "./components/NewTransactionsModal";
import { GlobalStyle } from "./styles/global";



export function App() {


  Modal.setAppElement('#root');

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);



  function handleOpenNewTransactionsModal() {
    setIsNewTransactionsModalOpen(true);
  }
  function handleCloseNewTransactionsModal() {
    setIsNewTransactionsModalOpen(false);
  }



  return (
    <>

      <Header onOpenOpenNewTransactionsModal={handleOpenNewTransactionsModal} />
      <Dashboard />

      <NewTransactionsModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal} />
      <GlobalStyle />
    </>
  );
}


