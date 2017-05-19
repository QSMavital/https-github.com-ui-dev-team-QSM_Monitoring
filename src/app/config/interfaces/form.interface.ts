export interface CustomControlGroup {
  title:string,
  name:string,
  controls:CustomControl[]
}

export interface CustomControl {
  name:string,
  label?:string,
  type:string,
  value?:any,
  placeholder?:string,
  options?:any[],
  inputs?:CustomControl[]
}
