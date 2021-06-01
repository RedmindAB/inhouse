import styled from 'styled-components'
import { inputStyles } from '../../theme/base'
import { breakpoints } from '../../theme/mediaBreakpoints'

export const Container = styled.div`
  position: relative;
`

export const Dropdown = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  width: 380px;
  border: 2px solid var(--background);
  border-top: none;

  ${breakpoints.tablet} {
    width: 100%;
  }

  max-height: 400px;
  overflow: scroll;
`

export const InputClickable = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  width: 380px;

  ${breakpoints.tablet} {
    width: 100%;
  }

  input {
    pointer-events: none;
  }
`

export const IconContainer = styled.div<{ disabled: boolean }>`
  position: absolute;
  right: 20px;
  background: ${({ disabled }) => (disabled ? 'transparent' : 'white')};
`

export const Option = styled.div`
  ${inputStyles}
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpoints.tablet} {
    width: 100%;
  }

  &:hover {
    background: rgb(240, 240, 240);
  }
`

export const OptionCircle = styled.div<{ selected: boolean }>`
  height: 20px;
  width: 20px;
  border: 2px solid var(--background);
  ${({ selected }) => selected && 'background: var(--background);'}
`
