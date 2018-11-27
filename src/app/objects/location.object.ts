export class LocationModel {
  name_location = ""
  detail_location = ""
  price_location = 0
  img_location = ""
  constructor(
    name_location = "",
    detail_location = "",
    price_location = 0,
    img_location = ""
  ) {
    this.detail_location = detail_location
    this.name_location = name_location
    this.price_location = price_location
    this.img_location = img_location
  }
}
