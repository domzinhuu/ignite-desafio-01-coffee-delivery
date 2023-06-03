import traditional from '../assets/expresso.svg'
import americano from '../assets/americano.svg'
import arabe from '../assets/arabe.svg'
import cafeComLeite from '../assets/cafe_com_leite.svg'
import cafeGelado from '../assets/café_gelado.svg'
import capuccino from '../assets/capuccino.svg'
import chocolateQuent from '../assets/chocolate_quente.svg'
import cubano from '../assets/cubano.svg'
import tradicionalCremoso from '../assets/expresso_cremoso.svg'
import havaiano from '../assets/havaiano.svg'
import irlandes from '../assets/irlandes.svg'
import latte from '../assets/latte.svg'
import macchiato from '../assets/macchiato.svg'
import mocaccino from '../assets/mochaccino.svg'

export interface Coffee {
  logo: any
  types: string[]
  name: string
  description: string
  price: number
}

export const productList: Coffee[] = [
  {
    logo: traditional,
    types: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    logo: americano,
    types: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    logo: tradicionalCremoso,
    types: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    logo: cafeGelado,
    types: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    logo: cafeComLeite,
    types: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    logo: latte,
    types: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    logo: capuccino,
    types: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    logo: macchiato,
    types: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    logo: mocaccino,
    types: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },

  {
    logo: chocolateQuent,
    types: ['tradicional', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    logo: cubano,
    types: ['tradicional', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    logo: havaiano,
    types: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    logo: arabe,
    types: ['especial'],
    name: 'Arabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    logo: irlandes,
    types: ['especial', 'alcoólico'],
    name: 'Irlandes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
