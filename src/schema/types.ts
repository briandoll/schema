export interface ISchemaTypeFinal {
  type: SchemaType
  required: boolean
  array: boolean
  component: Component | RefComponent
  ref?: string
  default?: any
  description?: string
}

export interface ISchemaTypeConfig {
  type: SchemaType
  ref?: string
  component?: Component
  description?: string
  required?: boolean
  isList?: boolean
  default?: any
}

export type SchemaTypeFunction = (config: ISchemaTypeConfig) => ISchemaTypeFinal

export interface ISchema {
  [fieldName: string]: ISchemaTypeFinal
}

export interface ITypeMap {
  [type: string]: SchemaType
}

export interface IValidComponentsMap {
  [type: string]: EveryComponent[]
}

export interface IComponentsMap {
  [type: string]: EveryComponent
}

export type Component =
  | 'markdown'
  | 'simpletext'
  | 'calendar'
  | 'range'
  | 'color'
  | 'toggle'
export type RefComponent = 'asset' | 'document' | 'shape'
export interface IComponents {
  [name: string]: Component | RefComponent
}
export type EveryComponent = Component | RefComponent
export type SchemaType =
  | StringType
  | NumberType
  | BooleanType
  | DateType
  | ShapeType
  | DocumentType
export type StringType = string
export type DateType = string
export type BooleanType = string
export type NumberType = string
export type ShapeType = string
export type DocumentType = string
export type AssetType = string
