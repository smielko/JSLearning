const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      input: "",
      isVisible: true,
    };
  },
  computed: {
    Visibility() {
      return this.isVisible === true ? "Hide" : "Show";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.input);
    },
    ToggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
}).mount("#assignment");
