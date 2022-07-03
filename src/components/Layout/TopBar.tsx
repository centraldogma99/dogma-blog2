import styled from '@emotion/styled'
import React from 'react'
const TopBar = () => {
  return <Container>My Blog</Container>
}

const Container = styled.div`
  position: sticky;
  background-color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  text-align: center;
  width: 100vw;
`

export default TopBar
