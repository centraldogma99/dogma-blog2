// only vertical
import { useCallback } from 'react'

interface Props {
  opacityAnimationDistance: number //px
  textAppearDistance: number // px
  textDisappearDistance: number // px
  textMoveSpeedMultiplier: number
  parentDivStartDistance: number // px
}

export interface TextState {
  pos: number
  visible: boolean
  opacity: number
}

export const defaultTextState = () => {
  return {
    pos: 0,
    visible: false,
    opacity: 0,
  }
}

const useAnimatedText = ({
  opacityAnimationDistance,
  textAppearDistance,
  textDisappearDistance,
  textMoveSpeedMultiplier,
  parentDivStartDistance,
}: Props) => {
  const getPos = useCallback(
    (windowScrollY: number) => {
      const childScrollTop = windowScrollY - parentDivStartDistance
      if (
        childScrollTop > textAppearDistance &&
        childScrollTop < textDisappearDistance
      )
        return childScrollTop * textMoveSpeedMultiplier
    },
    [
      parentDivStartDistance,
      textAppearDistance,
      textDisappearDistance,
      textMoveSpeedMultiplier,
    ],
  )

  const getVisibility = useCallback(
    (windowScrollY: number) => {
      const childScrollTop = windowScrollY - parentDivStartDistance

      return childScrollTop > textDisappearDistance
        ? false
        : childScrollTop > textAppearDistance
    },
    [parentDivStartDistance, textAppearDistance, textDisappearDistance],
  )

  const getOpacity = useCallback(
    (windowScrollY: number) => {
      const childScrollTop = windowScrollY - parentDivStartDistance
      const passed = childScrollTop - textAppearDistance
      if (passed < 0) return 0

      return passed > opacityAnimationDistance
        ? 1
        : passed / opacityAnimationDistance
    },
    [opacityAnimationDistance, parentDivStartDistance, textAppearDistance],
  )

  const getTextState = (windowScrollY: number): TextState => {
    return {
      pos: getPos(windowScrollY) ?? 0,
      visible: getVisibility(windowScrollY),
      opacity: getOpacity(windowScrollY),
    }
  }

  return { getPos, getOpacity, getVisibility, getTextState }
}

export default useAnimatedText
