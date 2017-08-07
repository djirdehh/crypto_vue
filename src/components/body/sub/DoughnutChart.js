import { Doughnut } from 'vue-chartjs'

export default Doughnut.extend({
  props: ['data'],
  mounted () {
    this.renderChart(
      this.data,
      { responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      })
  }
})
