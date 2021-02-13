import styled from 'styled-components'
import BossaBox from '../../assets/logobossabox.svg'

export const BossaBoxLogo = styled(BossaBox)`
  margin: 30px 35.55px 34.95px 34.5px;
`

export const StyledBar = styled.div`
  display: flex;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100px;
  background: ${props => props.theme.colors.white};
  border: 0.5px solid ${props => props.theme.colors.mostDarkestWhite};
`
export const CollapseTrigger = styled.div`
  cursor: pointer;
  min-width: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`
