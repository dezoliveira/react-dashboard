import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import {Container} from './styles'

const Dashboard: React.FC = () => {

  const options = [
    {value: 'Andres', label: 'Andres'},
    {value: 'Amanda', label: 'Amanda'},
    {value: 'Joao', label: 'Joao'},
    {value: 'Silva', label: 'Silva'},
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
        <SelectInput options={options}/>
      </ContentHeader>
    </Container>
  )
}

export default Dashboard