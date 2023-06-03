import { Minus, Plus } from '@phosphor-icons/react'
import { CountInput } from './styles'

enum ChangeType {
  increase = 'increase',
  decrease = 'decrease',
}

interface CountProps {
  value: number
  changeValue: (value: number) => void
}

export function Count({ value = 1, changeValue }: CountProps) {
  function handleChange(type: ChangeType) {
    if (type === ChangeType.increase) {
      changeValue((value += 1))
    }

    if (type === ChangeType.decrease && value >= 1) {
      changeValue((value -= 1))
    }
  }

  return (
    <CountInput>
      <button
        className="iconButton"
        title="Aumentar quantidade"
        onClick={() => handleChange(ChangeType.decrease)}
      >
        <Minus size={16} />
      </button>
      <input type="number" min={1} step={1} value={value} readOnly />
      <button
        title="Diminuir quantidade"
        className="iconButton"
        onClick={() => handleChange(ChangeType.increase)}
      >
        <Plus size={16} />
      </button>
    </CountInput>
  )
}
