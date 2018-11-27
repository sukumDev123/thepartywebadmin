export class ListObject {
  name = ""
  price = 0
  detail = ""
  img = ""
  type = ""
  id = ""
  constructor(
    name: string,
    price: number,
    detail: string,
    img: string,
    type: string,
    id: any
  ) {
    this.name = name
    this.detail = detail
    this.price = price
    this.img = img
    this.type = type
    this.id = id
  }
}
