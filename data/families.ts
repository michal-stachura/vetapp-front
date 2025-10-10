import type { Family } from '~/types/Family'

export const familiesData: Family[] = [
  {
    id: 'p1',
    father: 'John',
    mother: 'Jane',
    children: [
      {
        id: 'p1_kate',
        name: 'Kate',
        isSpinning: false,
        isHungry: false
      },
      {
        id: 'p1_bart',
        name: 'Bart',
        isSpinning: false,
        isHungry: false
      },
      {
        id: 'p1_john',
        name: 'John',
        isSpinning: false,
        isHungry: false
      }
    ]
  },
  {
    id: 'p2',
    father: 'Mike',
    mother: 'Mary',
    children: [
      {
        id: 'p2_tom',
        name: 'Tom',
        isSpinning: false,
        isHungry: false,
        skinColor: 'bg-green-800'
      },
      {
        id: 'p2_chris',
        name: 'Chris',
        isSpinning: false,
        isHungry: false,
        skinColor: 'bg-green-800'
      }
    ]
  }
]
