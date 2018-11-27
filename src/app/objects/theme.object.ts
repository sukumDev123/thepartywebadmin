export class ThemeObjects {
  name_theme = ""
  detail_theme = ""
  price_theme = 0
  img_theme = ""
  constructor(
    name_theme = "",
    detail_theme = "",
    price_theme = 0,
    img_theme = ""
  ) {
    this.detail_theme = detail_theme
    this.name_theme = name_theme
    this.price_theme = price_theme
    this.img_theme = img_theme
  }
}
