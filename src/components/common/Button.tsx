import styled from '@emotion/styled'
import React from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className }: ButtonProps) => {
  return <StyledButton className={className}>{children}</StyledButton>
}

const StyledButton = styled.button`
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.button.text};
  background-color: ${({ theme }) => theme.button.background};
  &:hover {
    color: ${({ theme }) => theme.button.hoverText}};
    background-color: ${({ theme }) => theme.button.hoverBackground};
  }
`

export default Button

// typography 정의하기
