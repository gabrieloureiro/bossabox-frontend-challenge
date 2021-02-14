import React from 'react'

import { SearchbarInterface } from './types'

import { Search } from '@/components/Icons'

import { Wrapper, StyledSearchbar } from './styles'

const Searchbar: React.FC<SearchbarInterface> = ({ ...rest }) => {
  return (
    <Wrapper>
      <Search />
      <StyledSearchbar
        type="text"
        placeholder="Digite o que está procurando..."
        {...rest}
      />
    </Wrapper>
  )
}

export default Searchbar
