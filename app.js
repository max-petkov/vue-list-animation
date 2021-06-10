const app = Vue.createApp({
  template: `
    <div class="container">
        <animated-list :randomLists="arrOfStrings"></animated-list>
    </div>
    `,
  data() {
    return {
      arrOfStrings: ["Banana", "Apple", "V8", "Motorcycle", "Kinesiotape"],
    };
  },
});

app.component("animated-list", {
  template: `
    <ul>
        <li v-for="randomLi in randomLists" :key="randomLi">{{ randomLi }}</li>
    </ul>
    `,
  props: {
    randomLists: Object,
  },
});

app.mount("#app");
