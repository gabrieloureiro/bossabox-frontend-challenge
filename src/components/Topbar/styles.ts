import styled from 'styled-components'

export const StyledBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100px;
  background: ${props => props.theme.colors.white};
  border: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  border-left: none;
`

export const LogoWrapper = styled.div`
  margin: 30px 35.55px 34.95px 34.5px;
`

export const CollapseTrigger = styled.div`
  cursor: pointer;
  width: 72.55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};

  &::before {
    content: '';
    display: block;
    background: transparent;
    height: 100px;
    width: 35.55px;
  }
`

export const Title = styled.h3`
  margin: auto 0;
  padding: 0 35.55px;

  @media screen and (max-width: 550px) {
    display: none;
  }
`

export const UserDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 0;
  margin-right: 30px;
  background: transparent;
  width: 77px;
  height: 18px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 550px) {
    display: none;
  }
`

export const Username = styled.span`
  text-align: left;
  font: normal normal 600 20px/26px Source Sans Pro;
  letter-spacing: 0.4px;
  color: ${props => props.theme.colors.lightInk};
`

export const Avatar = styled.div`
  margin: auto 0;
  margin-right: 30px;
  min-width: 35px;
  min-height: 35px;
  border-radius: 50%;
  background: ${props => props.theme.colors.lightInk};
  cursor: pointer;

  @media screen and (max-width: 550px) {
    margin-left: auto;
  }
`

export const AlertNotifications = styled.div`
  position: relative;
  margin: auto 0;
  margin-right: 56.47px;
  min-width: 19.53px;
  min-height: 19.53px;
  background: transparent;
  border: 2px solid ${props => props.theme.colors.lighterInk};
  cursor: pointer;

  @media screen and (max-width: 330px) {
    display: none;
  }

  &::after {
    content: '';
    display: block;
    background: ${props => props.theme.colors.red};
    border-radius: 50%;
    height: 12px;
    width: 12px;
    position: absolute;
    right: -8px;
    top: -8px;
  }
`
