import { defineComponent } from 'vue';

import "./App.css";
import { RouterView } from 'vue-router';

export default defineComponent({
  setup() {
    return () => (
      <>
        <RouterView />
      </>
    );
  },
});
