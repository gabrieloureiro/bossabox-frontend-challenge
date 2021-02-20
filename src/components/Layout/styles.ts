import styled from 'styled-components'

export const FloatChat = styled.a`
  position: fixed;
  width: 50px;
  height: 50px;
  padding: 14px 12.5px 14.25px 12px;
  background: ${props => props.theme.colors.blue} 0% 0% no-repeat padding-box;
  border-radius: 5px;
  right: 50px;
  bottom: 50px;
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  color: ${props => props.theme.colors.ink};

  &:hover {
    background: ${props => props.theme.colors.darkerGreen} 0% 0% no-repeat
      padding-box;
    transform: translateY(-3px);
    box-shadow: 0 8px 6px -6px ${props => props.theme.colors.ink};
    & > div {
      opacity: 1;
      visibility: visible;
    }
  }
`

export const Message = styled.div`
  text-decoration: none;
  position: absolute;
  bottom: 80px;
  opacity: 0;
  visibility: hidden;
  width: 300px;
  right: 0;
  background-color: ${props => props.theme.colors.darkWhite};
  color: ${props => props.theme.colors.ink};
  border-radius: 5px;
  border: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  padding: 8px;
  transition: 300ms linear;

  &::before {
    content: '';
    position: absolute;
    right: 15px;
    bottom: -5px;
    height: 8px;
    width: 8px;
    transform: rotate(45deg);
    background-color: ${props => props.theme.colors.darkWhite};
    border-bottom: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
    border-right: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  }
`
