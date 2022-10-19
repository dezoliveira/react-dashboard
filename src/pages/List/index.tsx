import React from 'react'

import { Container } from './styles'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

const List: React.FC = () => {

  const options = [
    {value: 'Andres', label: 'Andres'},
    {value: 'Amanda', label: 'Amanda'},
    {value: 'Joao', label: 'Joao'},
    {value: 'Silva', label: 'Silva'},
  ]

  return (
    <ContentHeader title="Saídas" lineColor="#e44c4e">
      <SelectInput options={options}/>
    </ContentHeader>
  )
}

export default List