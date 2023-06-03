import { Minus, Plus } from '@phosphor-icons/react'
import { CountInput } from './styles'

export function Count() {
  return (
    <CountInput>
      <Minus size={14} />
      <input type="number" min={1} step={1} value={0} />
      <Plus size={14} />
    </CountInput>
  )
}
