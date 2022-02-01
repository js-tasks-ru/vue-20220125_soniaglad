import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      x: null,
      y: null,
      result: {
        sum: 'sum',
        subtract: 'subtract',
        multiply: 'multiply',
        divide: 'divide',
      },
    };
  },
  computed: {
    culcResult() {
      // ???
    },
    /*
    sum() {
      return (this.result = this.x + this.y);
    },
    subtract() {
      return (this.result = this.x - this.y);
    },
    multiply() {
      return (this.result = this.x * this.y);
    },
    divide() {
      return (this.result = this.x / this.y);
    },*/
  },
});

const vm = app.mount('#app');
