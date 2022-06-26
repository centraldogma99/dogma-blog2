import styled from '@emotion/styled'
import React from 'react'

interface TagButtonProps {
  hasSharp?: boolean
  text: string
}

const Button = styled.button`
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
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
