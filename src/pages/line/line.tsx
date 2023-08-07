import { defineComponent, onMounted } from 'vue';
import { useStore } from '../../store/main';
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

import styles from './line.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
)

export default defineComponent({
  name: 'Line',
  components: {
    Line,
  },
  setup() {
    const store = useStore()

    onMounted(async () => {
      await store.getLine()
    })

    return () => (
      <>
        <h1>График отображающий линейную диаграмму:</h1>
        <div class={styles.graphic}>
          {store.line && <Line
            options={{
              responsive: true,
              plugins: {
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true,
                    },
                    pinch: {
                      enabled: true
                    },
                    mode: 'x',
                  }
                }
              }
            }}
            data={store.line}
          />}
        </div>
      </>
    );
  },
});
