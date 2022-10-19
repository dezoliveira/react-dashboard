import React from 'react'

import { Container, Content } from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'

const List: React.FC = () => {

  const options = [
    {value: 'Andres', label: 'Andres'},
    {value: 'Amanda', label: 'Amanda'},
    {value: 'Joao', label: 'Joao'},
    {value: 'Silva', label: 'Silva'},
  ]

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#e44c4e">
        <SelectInput options={options}/>
      </ContentHeader>

      <Content>
        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        <HistoryFinanceCard 
          cardColor="#313862"
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />

        
      </Content>
    </Container>
  )
}

export default List