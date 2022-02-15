import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    counter: {
      type: Number,
      default: 0,
    },

    emits: ['inc'],
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  methods: {
    inc() {
      this.$emit('inc');
    },
  },

  // Шаблон потребуется отредактировать
  template: `<button
                type="button"
                @click='inc()'>
                {{ counter }}
            </button>`,
});
