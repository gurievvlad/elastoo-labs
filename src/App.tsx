import { defineComponent } from 'vue';

import { RouterView } from 'vue-router';
import { useStore } from './store/main';
import ErrorMessage from './components/error-message/error-message';

export default defineComponent({
  setup() {
    const store = useStore()

    return () => (
      <>
        <RouterView />
        {store.error && <ErrorMessage
          message={store.error}
          onClose={() => store.error = null}
        />}
      </>
    );
  },
});
