const app = Vue.createApp({
  
  data() {
    return {
      counter : 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    ReduceCounter(num)
    {
      if (this.counter > 0)
        this.counter -= num

    },
    IncreaseCounter(num)
    {
      this.counter += num
    },
    UpdateName(event)
    {
      this.name = event.target.value
    },
    SubmitForm(event)
    {
      alert('Submitted!')
    },
    ConfirmName()
    {
      this.confirmedName = this.name;
    }
  },
});

app.mount('#events');
