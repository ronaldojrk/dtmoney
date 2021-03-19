
import Modal from 'react-modal';
import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';



interface HeaderProps {


  onOpenOpenNewTransactionsModal: () => void;


}

export function Header({ onOpenOpenNewTransactionsModal }: HeaderProps) {



  return (

    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenOpenNewTransactionsModal}>
          Nova Transação
      </button>


      </Content>
    </Container>
  )
}