import { useLottie } from 'lottie-react'
import coffeeAnimation from '../../assets/coffee_animation.json'
import { LoadingContainer } from './styles'

export function Loading() {
  const options = {
    animationData: coffeeAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  return <LoadingContainer>{View}</LoadingContainer>
}
