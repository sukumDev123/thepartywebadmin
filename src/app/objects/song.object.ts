export class ListObject {
  name = ""
  price = 0
  detail = ""
  img = ""
  constructor(name: string, price: number, detail: string, img: string) {
    this.name = name
    this.detail = detail
    this.price = price
    this.img = img
  }
}
