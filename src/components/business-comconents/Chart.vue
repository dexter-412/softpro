<template>
  <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
  />
</template>

<script>
import { mapGetters } from "vuex";
import { Doughnut } from 'vue-chartjs/legacy';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default {
  name: 'DoughnutChart',

  components: {
    Doughnut
  },

  computed: {
    ...mapGetters('toDo', ['getStatistic']),

    chartData() {
      return {
        labels: ['Виконано', 'Невиконано'],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651'],
            data: this.getStatistic
          }
        ]
      }
    },
  },

  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  }
}
</script>
