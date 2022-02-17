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

  template: `
    <!--  :style="{'--bg-url': url(image)}" - не рабоатет вообще -->
    <div class="meetup-cover" :style="{'--bg-url': image}">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
