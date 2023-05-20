const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: ''
    };
  },
  watch:
  {
    counter(value){
      if(value > 50)
      { const that = this;
        setTimeout(function(){ 
          that.counter = 0;
        }, 2000);
      }
    }
  },
  computed:{
    FullName()
    {
      if(this.name === '')
        return ' ';
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    ResetInput()
    {
      this.name = ''
      this.lastName = ''
    },
    
  }
});

app.mount('#events');
