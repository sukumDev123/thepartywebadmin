import { Component, OnInit } from "@angular/core"
import { Chart } from "angular-highcharts"
import { PartyService } from "src/app/services/party/party.service"
import { AuthService } from "src/app/services/auth/auth.service"

@Component({
  selector: "app-rank",
  templateUrl: "./rank.component.html",
  styleUrls: ["./rank.component.css"]
})
export class RankComponent implements OnInit {
  chart
  listOfChart = []
  mountsData = []
  listOfDataOfMount = []
  temp = []
  tempYear = []
  mouthOfSelect = []
  partyOfDate = []
  dateIs = ""
  seletedYear = "Year"
  totalPrice = 0
  seleteToTalDateAll = []
  detailDatePrice = 0
  clickShowDe = false
  totalBySeletePrice = 0
  month = [
    { name: "Jan", mouth: 1 },
    { name: "Feb", mouth: 2 },
    { name: "Mar", mouth: 3 },
    { name: "Apr", mouth: 4 },
    { name: "May", mouth: 5 },
    { name: "Jun", mouth: 6 },
    { name: "Jul", mouth: 7 },
    { name: "Aug", mouth: 8 },
    { name: "Sep", mouth: 9 },
    { name: "Oct", mouth: 10 },
    { name: "Nov", mouth: 11 },
    { name: "Dec", mouth: 12 }
  ]
  constructor(private partyHistory: PartyService, private user: AuthService) {}

  ngOnInit() {
    this.partyHistory.getAllPartyOfList().subscribe(data => {
      const dataCreateDate = data.data.map(d => {
        const date = new Date(parseInt(d.start_time))
        const dMy = `${date.getDate()}/${date.getMonth() +
          1}/${date.getFullYear()}`

        return {
          date: dMy,
          price_total: d.price_total,
          name_party: d.name_party
        }
      })
      // console.log(dataCreateDate)
      this.listOfChart = dataCreateDate
      this.tempYear = dataCreateDate
        .map(year => year.date.split("/")[2])
        .filter((data, index, list) => list.indexOf(data) == index)
    })
  }
  handlerGrap(data, toList) {
    this.chart = new Chart({
      chart: {
        type: "column"
      },
      title: {
        text: `Party of year ${this.seletedYear}`
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        title: {
          text: "Total list party in 2018 rank."
        }
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: "{point.y:,.2f} บาท"
          }
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat:
          '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:,.2f} บาท</b> of total<br/>'
      },
      series: [
        {
          name: this.seletedYear,
          data: data
        }
      ],
      drilldown: {
        series: toList
      }
    })
  }
  selectedYearChange(year) {
    const yearS = year.value
    const dataHandlerYear = this.handlerYear(yearS)
    const dataHandlerMonth = this.handlerMonutPosition(dataHandlerYear)
    const monthArray = this.handlerArrayear(dataHandlerYear)
    this.temp = this.handlerMonthS(monthArray, dataHandlerYear)
    this.seletedYear = yearS
    this.mountsData = monthArray
      .map(d => this.month[parseInt(d) - 1].name)
      .filter((data, index, list) => list.indexOf(data) == index)
    this.handlerGrap(dataHandlerMonth, [])
  }
  selectedData(i) {
    // console.log(this.temp[i])
    const testt = this.mergeDay(this.temp[i])
    this.seleteToTalDateAll = []
    this.mouthOfSelect = this.temp[i]
    this.listOfDataOfMount = testt
    this.totalPrice = this.listOfDataOfMount.reduce(
      (sum, data) => (sum += data.price_total),
      0
    )
  }
  showDetailDay(date) {
    // console.log(date)
    this.clickShowDe = true
    this.dateIs = date
    const seleteToTalDate = this.mouthOfSelect.filter(d => {
      const timeSelect = new Date(date)
      const dateThai = `${timeSelect.getDate()}/${timeSelect.getMonth() +
        1}/${timeSelect.getFullYear()}`
      return d.date == dateThai
    })
    this.seleteToTalDateAll = seleteToTalDate.map(data => {
      const dateShow = data.date.split("/")
      const dateI = `${dateShow[1]}/${dateShow[0]}/${dateShow[2]}`
      return {
        name_party: data.name_party,
        price_total: data.price_total,
        date: new Date(dateI)
      }
    })
    this.detailDatePrice = this.seleteToTalDateAll.reduce(
      (sum, data) => (sum += data.price_total),
      0
    )
  }
  mergeDay(year) {
    const dayH = year.map(d => {
      // console.log(d.date)
      const dateS = d.date.split("/")
      const dateC = `${dateS[1]}/${dateS[0]}/${dateS[2]}`
      return { date: +new Date(dateC), price_total: d.price_total }
    })
    dayH.sort((a, b) => b.date - a.date)
    // console.log(dayH)
    let tempP = []
    dayH.forEach((data, index) => {
      const indexOfA = tempP.length
      if (indexOfA) {
        if (tempP[indexOfA - 1].date == data.date) {
          tempP[indexOfA - 1].price_total += data.price_total
        } else {
          tempP.push(data)
        }
      } else {
        tempP.push(data)
      }
    })
    // console.log(tempP)
    return tempP.map(d => {
      return {
        date: new Date(d.date),
        price_total: d.price_total
      }
    })
    // const priceType = year.map(d => )
  }
  handlerMonthS(year, mountS) {
    const data = year.map(d => {
      const mount = mountS.filter(mm => {
        const mounts = mm.date.split("/")[1]
        return d == mounts
      })
      return mount
    })
    return data
  }
  handlerArrayear(year) {
    let mouthTotal = []

    year.forEach((d, i) => {
      const splitD = d.date.split("/")[1]
      if (mouthTotal.length) {
        if (mouthTotal[mouthTotal.length - 1] != splitD) {
          mouthTotal[mouthTotal.length] = splitD
        }
      } else {
        mouthTotal.push(splitD)
      }
    })
    return mouthTotal
  }
  handlerYear(year) {
    const y = year
    const yearTotal = this.listOfChart.filter(data => {
      const test = data.date.split("/")[2]
      return y === test
    })
    return yearTotal
  }
  handlerMonutPosition(yearArray) {
    let yStart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const monthTotal = this.month.map(m => {
      return yearArray.map(data => {
        const dateE = data.date.split("/")[1]
        if (parseInt(dateE) === m.mouth) {
          yStart[m.mouth - 1] += data.price_total
        }
        return {
          name: m.name,
          y: yStart[m.mouth - 1],
          drilldown: m.name
        }
      })
    })
    let mouthMerge = []
    monthTotal.forEach((d, i) => {
      mouthMerge[i] = d[d.length - 1]
    })
    return mouthMerge
  }
  dateGetFunction(date) {
    const dateIs = new Date(date.value)
    const dateSplit = `${dateIs.getDate()}/${dateIs.getMonth() +
      1}/${dateIs.getFullYear()}`
    const dateIsSeleted = this.listOfChart.filter(d => d.date == dateSplit)
    // console.log(dateIsSeleted)
    this.partyOfDate = dateIsSeleted.map(d => {
      return {
        name: d.name_party,
        price: d.price_total,
        date: d.date
      }
    })
    this.totalBySeletePrice = this.partyOfDate.reduce(
      (sum, data) => (sum += data.price),
      0
    )
  }
}
