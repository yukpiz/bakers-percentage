export type Waters = Water[]
export type Yeasts = Yeast[]
export type Sugars = Sugar[]
export type Salts = Salt[]
export type SkimMilks = SkimMilk[]
export type Eggs = Egg[]

export type Water = CalculatedProperty
export type Yeast = CalculatedProperty
export type Sugar = CalculatedProperty
export type Salt = CalculatedProperty
export type SkimMilk = CalculatedProperty
export type Egg = CalculatedProperty

export interface CalculatedProperty {
  ratio: number;
  amount?: number;
}
