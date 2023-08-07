import { defineComponent } from 'vue'
import Button from '../../components/button/button'

import styles from './home.module.css'
import router from '../../router'

export default defineComponent({
  name: 'Home',
  setup () {
    return () => (
      <div class={styles.wrapper}>
        <div class={styles.content}>
          <h1 class={styles.title}>Главная страница отображения графиков</h1>
          <p class={styles.text}>Ниже вы можете перейти на одну из страниц на которых отображаются важные графики</p>
          <div className={styles.buttons}>
            <Button onClick={() => router.push('/line')}>Линейная диаграмма</Button>
            <Button variant={'secondary'} onClick={() => router.push('/pie')}>Круговая диаграмма</Button>
          </div>
        </div>
      </div>
    )
  }
})
