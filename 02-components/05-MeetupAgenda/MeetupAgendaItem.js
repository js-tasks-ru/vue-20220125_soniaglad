import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  methods: {
    setDefaultTitle() {
      for (let defaultTitle in agendaItemDefaultTitles) {
        return defaultTitle === this.agendaItem.type ? agendaItemDefaultTitles[defaultTitle] : this.agendaItem.title;
      }
    },

    setIcon() {
      for (let icon in agendaItemIcons) {
        if (icon === this.agendaItem.type) {
          return agendaItemIcons[icon];
        }
      }
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="\`/assets/icons/icon-\${setIcon()}.svg\`" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ setDefaultTitle() }}</h3>
        <p v-if="agendaItem.description" class="agenda-item__talk">
          <span v-if="agendaItem.type === 'talk'">{{ agendaItem.speaker }}</span>
          <span v-if="agendaItem.type === 'talk'" class="agenda-item__dot"></span>
          <span v-if="agendaItem.type === 'talk'" class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
