import React from 'react'

import { SearchbarInterface } from './types'

import { Search } from '@/components/Icons'

import { SearchWrapper, StyledSearchbar } from './styles'
import { useDispatch } from 'react-redux'
import { readSearchValue } from '@/store/modules/search/actions'

const Searchbar: React.FC<SearchbarInterface> = ({
  defaultValue,
  value,
  onChange,
  ...rest
}) => {
  const dispatch = useDispatch()
  const handleChange = (event: any) => {
    onChange(event.target.value)
    dispatch(readSearchValue(event.target.value))
  }

  return (
    <>
      <SearchWrapper>
        <Search />
        <StyledSearchbar
          type="text"
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          placeholder="Enter the tool you want..."
          {...rest}
        />
      </SearchWrapper>
    </>
  )
}

export default Searchbar
