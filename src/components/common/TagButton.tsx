import styled from '@emotion/styled'
import React from 'react'

interface TagButtonProps {
  hasSharp?: boolean
  text: string
}

const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  margin-right: 1rem;
  padding: 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
`

const TagButton = ({
  hasSharp = true,
  text,
}: React.PropsWithChildren<TagButtonProps>) => {
  return (
    <Button>
      {hasSharp ? '# ' : undefined}
      {text}
    </Button>
  )
}

export default TagButton
