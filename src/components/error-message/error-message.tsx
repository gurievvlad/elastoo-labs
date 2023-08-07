import { defineComponent } from 'vue'
import Button from '../button/button'
import styles from './error-message.module.css'

export default defineComponent({
  name: 'Button',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  setup (props, { emit }) {
    return () => (
      <div class={styles.errorMessage}>
        <h3 class={styles.message}>{props.message}</h3>
        <Button onClick={() => emit('close')}>Ок</Button>
      </div>
    )
  }
})
