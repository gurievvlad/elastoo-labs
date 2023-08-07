import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from '../store/main';
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement, LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
        {store.line && <Line
          options={{
            responsive: true,
          }}
          data={store.line}
          style={{
            width: '1000px'
          }}
        />}
      </>
    );
  },
});
