const app = Vue.createApp({
    data ()
    {
        return{
        name:"Sebastian Mielko",
        age:26,
        image: "https://www.cars.com/i/large/in/v2/stock_photos/9d6701e7-7931-48a6-aba3-7fe5a6060697/f5c9a749-ee49-4f32-b074-7571d23d023a.png"
        };
    },
    methods:
    {
        CalculateAge()
        {
            return this.age + 5;
        },
        GenerateNumber()
        {
            return Math.random();
        }
    }
});
app.mount('#assignment');