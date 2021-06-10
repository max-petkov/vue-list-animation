const app = Vue.createApp({
  template: `
    <div class="container">
        <animated-list></animated-list>
    </div>
    `,
});

// Components
app.component("animated-list", {
  template: `
    <transition-group tag="ul" name="animated-list">
        <li v-for="string in arrOfStrings" :key="string" @click="removeWord(string)">{{ string }}</li>
    </transition-group>
    <div>
        <input type="text" ref="stringInput" placeholder="Enter something...">
        <button @click="addWord">Add Me</button>
    </div>
    `,
  data() {
    return {
      arrOfStrings: ["Banana", "Apple", "V8", "Motorcycle", "Kinesiotape"],
    };
  },
  methods: {
    addWord() {
      this.arrOfStrings.unshift(this.$refs.stringInput.value);
    },
    removeWord(string) {
      this.arrOfStrings = this.arrOfStrings.filter((val) => val !== string);
    },
  },
});
app.mount("#app");
