import styled from 'styled-components'
import { Github, Linkedin } from '@/components/Icons'

export const Image = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  vertical-align: middle;
`
export const LargeText = styled.h2`
  margin-top: 24px;
  text-align: center;
`

export const MediumText = styled.h5`
  margin-bottom: 12px;
`
export const SmallText = styled.span`
  font-size: 16px;
  text-align: center;
`

export const Anchor = styled.a`
  margin: 0;
  padding: 0;
  outline: 0;
`

export const GithubIcon = styled(Github)`
  cursor: pointer;
  transition: all 0.5s ease;
  margin-top: 12px;

  path {
    fill: #a1a1a1;
  }

  &:hover {
    transform: translateY(-3px);
  }
`

export const LinkedinIcon = styled(Linkedin)`
  cursor: pointer;
  margin-right: 24px;
  transition: all 0.5s ease;
  margin-top: 12px;

  path {
    fill: #0073b1;
  }

  &:hover {
    transform: translateY(-3px);
  }
`
