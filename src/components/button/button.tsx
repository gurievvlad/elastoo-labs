import { defineComponent } from 'vue'
import styles from './button.module.css'

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'button',
      validator (value) {
        return ['button', 'reset', 'submit'].includes(value)
      }
    },
    variant: {
      type: String,
      default: 'primary',
      validator (value) {
        return ['primary', 'secondary'].includes(value)
      }
    }
  },
  setup (props, ctx) {
    return () => (
      <button
        type={props.type}
        class={[
          styles.button,
          styles[props.variant]
        ]}
        onclick={(e) => ctx.emit('click', e)}
      >
        {ctx.slots?.default?.()}
      </button>
    )
  }
})
