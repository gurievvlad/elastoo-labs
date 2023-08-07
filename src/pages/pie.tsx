import { computed, defineComponent, onMounted, ref } from 'vue';
import { useStore } from '../store/main';
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend)

export default defineComponent({
  name: 'Pie',
  components: {
    Pie,
  },
  setup() {
    const store = useStore()

    onMounted(async () => {
      await store.getPie()
    })

    return () => (
      store.pie && <Pie
        data={store.pie}
        style={{
          width: '1000px',
          height: '1000px'
        }}
      />
    );
  },
});
