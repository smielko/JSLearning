const app = Vue.createApp({
data()
{
    return{
        currentClass:'',
        isHidden : false,
        currentBackgroundColor : ''
    }
},
methods:
{
    ToggleVisibility()
    {
        this.isHidden = !this.isHidden
    }
},
computed:
{
    ClassManagement()
    {
        return{
        user1: this.currentClass === 'user1',
        user2: this.currentClass === 'user2',
        visible : !this.isHidden,
        hidden : this.isHidden
        }
    }
}
}).mount('#assignment');