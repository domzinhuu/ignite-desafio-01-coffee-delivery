import { MapPinLine } from '@phosphor-icons/react'
import { FormHeader } from '../CheckoutItem/FormHeader'
import { AddressFormContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { Text } from '../../../../styles/themes/global'

export function AddressForm() {
  const { register, formState } = useFormContext()
  const { errors }: any = formState
  return (
    <AddressFormContainer>
      <FormHeader
        icon={<MapPinLine size={22} />}
        iconColor="yellow-dark"
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      />
      <Text
        isBold={true}
        className={`errorMessage ${
          formState.isSubmitted && !formState.isValid ? 'show' : ''
        }`}
        color="yellow-dark"
        size="S"
      >
        Existem campos inválidos no formulário
      </Text>
      <div className="formFields">
        <input
          className={`cep ${errors.zipCode ? 'hasError' : ''}`}
          type="text"
          placeholder="CEP"
          {...register('zipCode')}
        />
        <input
          className={`street ${errors.street ? 'hasError' : ''}`}
          type="text"
          placeholder="Rua"
          {...register('street')}
        />

        <input
          className={`number ${errors.number ? 'hasError' : ''}`}
          type="text"
          placeholder="Número"
          {...register('number')}
        />

        <div className={`compl ${errors.info ? 'hasError' : ''}`}>
          <input type="text" placeholder="Complemento" {...register('info')} />
          <span>Opcional</span>
        </div>

        <input
          className={`neigh ${errors.neighborhood ? 'hasError' : ''}`}
          type="text"
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <input
          className={`city ${errors.city ? 'hasError' : ''}`}
          type="text"
          placeholder="Cidade"
          {...register('city')}
        />

        <input
          className={`uf ${errors.uf ? 'hasError' : ''}`}
          type="text"
          placeholder="UF"
          {...register('uf')}
        />
      </div>
      <div></div>
    </AddressFormContainer>
  )
}
