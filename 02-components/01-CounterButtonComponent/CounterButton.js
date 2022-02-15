import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр
  props: {
    count: {
      type: Number,
      default: 0,
    },

    emits: ['update:count'],
  },

  // Шаблон лучше держать максимально простым, а логику выносить в методы

  methods: {
    inc(value) {
      this.$emit('update:count', value);
    },
  },

  // Шаблон потребуется отредактировать
  template: `<button
                type="button"
                @click='inc(count + 1)'>
                {{ count }}
            </button>`,
});
