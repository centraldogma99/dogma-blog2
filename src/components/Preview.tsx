import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import useViewport from '../hooks/useViewport'
import FlexContainer from './common/FlexContainer'
import Spacing from './common/Spacing'
import TagButton from './common/TagButton'
import { PreviewTitle } from './common/Typography'

interface Props {
  title: string
  description: string
  tags: string[]
  imgSrc: string
  isHorizontal?: boolean
}

const Preview = ({
  title,
  description,
  tags,
  imgSrc,
  isHorizontal = false,
}: Props) => {
  const { width } = useViewport()
  const [isHorizontalInner, setIsHorizontal] = useState<boolean>(isHorizontal)

  useEffect(() => {
    if (!isHorizontal) return
    if (width > 642) setIsHorizontal(true)
    else setIsHorizontal(false)
  }, [isHorizontal, width])

  return (
    <Container direction={isHorizontalInner ? 'row' : 'column'}>
      <Img src={imgSrc} alt="preview alt" isHorizontal={isHorizontalInner} />
      {isHorizontalInner ? <Spacing size={32} inline /> : <Spacing size={8} />}
      <TextContainer>
        <div>
          {tags.map((tag, i) => (
            <TagButton key={i} text={tag} />
          ))}
        </div>
        <Spacing size={8} />
        <PreviewTitle>{title}</PreviewTitle>
        <DescriptionContainer>{description}</DescriptionContainer>
      </TextContainer>
    </Container>
  )
}

const TextContainer = styled.div`
  flex: 1.5;
`

const DescriptionContainer = styled.p`
  color: #60757e;
  font-size: 1.1rem;
  margin: 0.5rem 0 0;
`

const Container = styled(FlexContainer)`
  ${({ direction }) => (direction === 'row' ? undefined : verticalStyle)}
`

const verticalStyle = css`
  //min-width: 300px;
  max-width: 400px;
`

const Img = styled.img<{ isHorizontal: boolean }>`
  width: 100%;
  max-height: ${({ isHorizontal }) => (isHorizontal ? '200px' : '400px')};
  object-fit: cover;
  flex: 1;
`

export default Preview
