import React from 'react'

import { useRouter } from 'next/router'

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
  const router = useRouter()

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
          disabled={router.pathname !== '/'}
          defaultValue={defaultValue}
          onChange={handleChange}
          placeholder={
            router.pathname === '/'
              ? 'Enter the tool you want...'
              : 'You cannot search here'
          }
          {...rest}
        />
      </SearchWrapper>
    </>
  )
}

export default Searchbar
