import React from 'react'

import { SearchbarInterface } from './types'

import { Search } from '@/components/Icons'

import { Wrapper, StyledSearchbar } from './styles'

const Searchbar: React.FC<SearchbarInterface> = ({
  defaultValue,
  value,
  onChange,
  ...rest
}) => {
  const handleChange = (event: any) => {
    onChange(event.target.value)
  }
  return (
    <Wrapper>
      <Search />
      <StyledSearchbar
        type="text"
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder="Enter the tool you want..."
        {...rest}
      />
    </Wrapper>
  )
}

export default Searchbar
