import React from 'react'

import {
  MdDashboard, 
  MdArrowDownward, 
  MdArrowUpward, 
  MdExitToApp
} from 'react-icons/md'

import logo from '../../assets/logo.svg'

import { Container, Header, Logo, MenuContainer, MenuItemLink, Title } from './styles'

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo React Dashboard"/>
        <Title>React Dashboard</Title>
      </Header>

      <MenuContainer>

        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowDownward />
          Saidas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>

      </MenuContainer>
    </Container>
  )
}

export default Aside