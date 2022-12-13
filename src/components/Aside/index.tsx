import React from 'react'

import {
  MdDashboard, 
  MdArrowDownward, 
  MdArrowUpward, 
  MdExitToApp
} from 'react-icons/md'

import logo from '../../assets/logo.svg'

import { Container, Header, Logo, MenuContainer, Title } from './styles'

import { Link } from 'react-router-dom'

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo React Dashboard"/>
        <Title>React Dashboard</Title>
      </Header>

      <MenuContainer>

        <Link to="/dashboard">
          <MdDashboard />
          Dashboard
        </Link>

        <Link to="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </Link>

        <Link to="/list/exit-balance">
          <MdArrowDownward />
          Saidas
        </Link>

        <Link to="#">
          <MdExitToApp />
          Sair
        </Link>

      </MenuContainer>
    </Container>
  )
}

export default Aside