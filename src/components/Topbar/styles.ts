import styled from 'styled-components'

export const LogoWrapper = styled.div`
  margin: 30px 35.55px 34.95px 34.5px;
`
export const Title = styled.h3`
  position: absolute;
  top: 31px;
  left: 200.25px;

  @media screen and (max-width: 550px) {
    display: none;
  }
`

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
export const CollapseTrigger = styled.div`
  cursor: pointer;
  min-width: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
  padding-left: 35.55px;
`
