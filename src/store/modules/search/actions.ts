export const readSearchValue = (searchValue: string): any => {
  return {
    type: 'READ_SEARCH_VALUE',
    payload: searchValue
  }
}
