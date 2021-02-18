export const getSearchValue = (searchValue: string): any => {
  return {
    type: 'GET_SEARCH_VALUE',
    payload: searchValue
  }
}
