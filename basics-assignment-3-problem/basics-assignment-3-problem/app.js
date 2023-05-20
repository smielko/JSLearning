const app = Vue.createApp({
  data() {
    return {
      number: 0 
    };
  },
  watch: {
    result() {
      if (this.number > 37) {
        const that = this;
        setTimeout(function () {
          that.number = 0;
        }, 5000);
      }
    },
  },
  computed: {
    result() {
      if (this.number < 37) return "Not there yet!";
      else if (this.number === 37) return "Perfect";
      else return "Too much!";
    },
  },
  methods: {
    AddFive() {
      this.number += 5;
    },
    AddOne() {
      this.number++;
    },
  },
}).mount("#assignment");
