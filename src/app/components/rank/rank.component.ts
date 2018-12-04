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
  seletedYear = "Year"
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
    this.partyHistory
      .getListOfHistory(0, 100, this.user.changeUser())
      .subscribe(data => {
        // console.log(data)
        const dataCreateDate = data.data.map(d => {
          const date = new Date(d.creata_at)
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
      })
  }
  handlerGrap(data) {
    this.chart = new Chart({
      chart: {
        type: "column"
      },
      title: {
        text: "Linechart"
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
      series: [
        {
          name: this.seletedYear,
          data: data
        }
      ]
    })
  }
  selectedYearChange(year) {
    const yearS = year.value
    const dataHandlerYear = this.handlerYear(yearS)
    const dataHandlerMonth = this.handlerMonutPosition(dataHandlerYear)
    this.seletedYear = yearS

    this.handlerGrap(dataHandlerMonth)
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
          y: yStart[m.mouth - 1]
        }
      })
    })
    let mouthMerge = []
    monthTotal.forEach((d, i) => {
      mouthMerge[i] = d[d.length - 1]
    })
    return mouthMerge
  }
}
