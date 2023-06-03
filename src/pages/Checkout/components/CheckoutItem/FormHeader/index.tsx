import { Icon } from '@phosphor-icons/react'
import { Text } from '../../../../../styles/themes/global'
import { FormHeaderContainer } from './styles'

interface FormHeaderProps {
  icon: any
  title: string
  subtitle: string
  iconColor: 'yellow-dark' | 'purple-dark'
}

export function FormHeader({
  icon,
  title,
  subtitle,
  iconColor,
}: FormHeaderProps) {
  return (
    <FormHeaderContainer color={iconColor}>
      {icon}
      <div>
        <Text size="M" color="base-subtitle">
          {title}
        </Text>
        <Text size="S">{subtitle}</Text>
      </div>
    </FormHeaderContainer>
  )
}
