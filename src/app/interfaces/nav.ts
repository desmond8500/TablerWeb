export interface Nav {
  name: string,
  route: string,
  submenu?: [
    {
      name: string,
      route: string
    }
  ]
}
