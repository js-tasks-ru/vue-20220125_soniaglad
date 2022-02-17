import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },

  computed: {
    imageShown() {
      return this.image ? 'url(' + this.image + ')' : '';
    },
  },

  template: `
     <!-- <div class="meetup-cover" :style="{'&#45;&#45;bg-url': image ? 'url(' + image + ')' : ''}">-->
     <div class="meetup-cover" :style="{'--bg-url': imageShown}">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
