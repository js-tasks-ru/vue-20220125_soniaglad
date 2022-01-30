import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      x: 13,
      y: 5,
      result: 0,
    }
  },
  computed: {
      sum() {
        return this.result = this.x + this.y;
      },
      subtract() {
        return this.result = this.x - this.y;
      },
      multiply() {
        return this.result = this.x * this.y;
      },
      divide() {
        return this.result = this.x / this.y;
      },
  }
});

const vm = app.mount('#app');
