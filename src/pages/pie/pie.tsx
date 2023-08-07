import { defineComponent, onMounted } from 'vue'
import { useStore } from '../../store/main'
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'
import styles from './pie.module.css'

ChartJS.register(ArcElement, Tooltip, Legend)

export default defineComponent({
  name: 'Pie',
  components: {
    Pie
  },
  setup () {
    const store = useStore()

    onMounted(async () => {
      await store.getPie()
    })

    return () => (
      <>
        <h1>График отображающий круговую диаграмму:</h1>
        <div className={styles.graphic}>
          {store.pie && <Pie
            data={store.pie}
          />}
        </div>
      </>
    )
  }
})
