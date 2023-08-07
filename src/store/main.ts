import { defineStore } from 'pinia'

interface LineChart {
  labels: string[]
  datasets: {
    label: string
    backgroundColor: string
    data: number[]
  }[]
}

interface PieChart {
  labels: string[]
  datasets: {
    backgroundColor: string[],
    data: number[]
  }[]
}

export const useStore = defineStore('main', {
  state: () => ({
    line: null as LineChart,
    pie: null as PieChart,
    error: null as string | null
  }),
  actions: {
    async getLine () {
      try {
        this.line = await fetch('https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2')
          .then(res => {
            if (res.ok) return res
            this.error = 'Возникла ошибка при получении данных'
            return Promise.reject(res)
          })
          .then((data) => data.json() as { 'Дата': string; 'Месяц': string; 'Процент': number}[])
          .then((data) => {
            const resp = {
              labels: [],
              datasets: [{
                label: 'Процент общего числа',
                backgroundColor: 'rgb(229, 25, 100)',
                data: []
              }]
            }
            data.forEach((item) => {
              resp.labels.push(new Date(item['Дата']).toLocaleString('ru-ru', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }))
              resp.datasets[0].data.push(item['Процент'])
            })
            return resp
          })
      } catch (e) {
        this.error = 'Возникла ошибка при получении данных'
      }
    },
    async getPie () {
      try {
        this.pie = await fetch('https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047')
          .then(res => {
            if (res.ok) return res
            this.error = 'Возникла ошибка при получении данных'
            return Promise.reject(res)
          })
          .then((data) => data.json() as { 'Группа': string; 'Доля': number }[])
          .then((data) => {
            const resp = {
              labels: [],
              datasets: [{
                backgroundColor: [],
                data: []
              }]
            }
            data.forEach((item, i) => {
              resp.labels.push(item['Группа'])
              // Исключительно секретным образом генерирую цевета для диаграммы
              const color = `rgb(${255 / 100 * item['Доля'] * (i + 1)}, ${255 / 100 * item['Доля'] / (i + 1)}, 100)`
              resp.datasets[0].backgroundColor.push(color)
              resp.datasets[0].data.push(item['Доля'])
            })
            return resp
          })
      } catch (e) {
        this.error = 'Возникла ошибка при получении данных'
      }
    }
  }
})
