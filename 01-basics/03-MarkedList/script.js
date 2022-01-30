import { createApp } from './vendor/vue.esm-browser.js';

const fetchEmails = () => fetch('https://jsonplaceholder.typicode.com/comments').then((res) => res.json());

// Требуется создать Vue приложение
const app = createApp({
  data() {
    return {
      search: '',
      emails: null,
      isMarked: false,
    };
  },

  mounted() {
    fetchEmails().then((emails) => {
      this.emails = emails;
    });
  },

  computed: {
    filteredEmails() {
      if (!this.emails) return null;

      const searchFilter = (email) => email.email.toLowerCase().includes(this.search.toLowerCase());

      return this.emails.filter((email) => searchFilter(email));
    },
  },

  methods: {},
});

const vm = app.mount('#app');
