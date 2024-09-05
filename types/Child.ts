export type SkinColor =
  | 'bg-red-800'
  | 'bg-green-800'
  | 'bg-blue-800'
  | 'bg-orange-800'

export interface ChildProps {
  skinColor?: SkinColor
  isSpinning?: boolean
  name: string
}

export interface HungryKid {
  name: string
  meal: string
}
