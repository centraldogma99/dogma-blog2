import styled from '@emotion/styled'
import React, { useEffect, useRef, useState } from 'react'

import useAnimatedText, {
  defaultTextState,
  TextState,
} from '../components/common/AnimatedText'
import FlexContainer from '../components/common/FlexContainer'
import Layout from '../components/common/Layout'
import Spacing from '../components/common/Spacing'

const OPACITY_CONSTANT = 500
const PARENT_DIV_START = 1500

const IndexPage = () => {
  const parentDivRef = useRef<HTMLDivElement>(null)
  const { getTextState: getTextState1 } = useAnimatedText({
    opacityAnimationDistance: OPACITY_CONSTANT,
    textAppearDistance: 0,
    textDisappearDistance: 3000,
    textMoveSpeedMultiplier: 1 / 5,
    parentDivStartDistance: PARENT_DIV_START,
  })
  const { getTextState: getTextState2 } = useAnimatedText({
    opacityAnimationDistance: OPACITY_CONSTANT,
    textAppearDistance: 500,
    textDisappearDistance: 3500,
    textMoveSpeedMultiplier: 1 / 5,
    parentDivStartDistance: PARENT_DIV_START,
  })

  const [text1, setText1] = useState<TextState>(defaultTextState)
  const [text2, setText2] = useState<TextState>(defaultTextState)

  // 그 div가 아직 돌아가지 않을때도 이벤트 리스너가 돌아가는 문제
  const handleScroll = () => {
    if (!parentDivRef.current) return
    const scrollY = window.scrollY
    setText1(getTextState1(scrollY))
    setText2(getTextState2(scrollY))
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <Layout>
      <FirstDummy>일반적인 DIV</FirstDummy>
      <OutsideContainer onScroll={handleScroll}>
        <StickyContainer direction="column" ref={parentDivRef}>
          <AnimatingText yPos={`${-text1.pos}px`} opacity={text1.opacity}>
            Apple 사상 가장 앞선
            <br />
            듀얼 카메라 시스템.
          </AnimatingText>
          <Spacing size={300} />
          <AnimatingText yPos={`${-text2.pos}px`} opacity={text2.opacity}>
            구석구석, 견고함을 전면에
            <br />
            내세운 디자인.
          </AnimatingText>
        </StickyContainer>
      </OutsideContainer>
    </Layout>
  )
}

const FirstDummy = styled(FlexContainer)`
  height: ${PARENT_DIV_START}px;
`

const OutsideContainer = styled.div`
  height: 10000px;
  background-color: #12213a;
`

const StickyContainer = styled(FlexContainer)`
  height: 100vh;
  width: 100vw;
  position: sticky;
  top: 0;
`

const AnimatingText = styled.div<{ yPos?: string; opacity?: number }>`
  width: 100%;
  text-align: center;
  transform: translateY(${({ yPos }) => yPos ?? '0'});
  opacity: ${({ opacity }) => opacity};
  font-size: 4rem;
  color: white;
  font-weight: 600;
  line-height: 1.171875;
`

export default IndexPage
