import styled from 'styled-components'

export const StyledSearchbar = styled.input`
  display: flex;
  background: transparent;
  border: none;
  flex: 1;
  padding-left: 8px;
  color: ${props => props.theme.colors.lighterInk};
  text-align: left;
  font: normal normal normal 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;

  &::placeholder {
    text-align: left;
    font: normal normal normal 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    color: ${props => props.theme.colors.lighterInk};
  }

  @media screen and (max-width: 910px) {
    width: 100%;
    min-width: 54px;
  }

  @media screen and (max-width: 820px) {
    &::placeholder {
      font-size: 14px;
    }
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 25px 12px 15px;
  background: ${props => props.theme.colors.darkerWhite} 0% 0% no-repeat
    padding-box;
  border: 1px solid ${props => props.theme.colors.darkestWhite};
  border-radius: 5px;
  max-width: 403px;
  height: 50px;
  margin: auto 0;
  margin-left: auto;
  margin-right: 45.91px;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.darkestWhite};
  }

  svg {
    margin-right: 10px;
  }

  @media screen and (max-width: 610px) {
    margin: auto 15px;
  }

  @media screen and (max-width: 346px) {
    margin: auto 15px auto 0;
  }
`
