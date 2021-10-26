members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {}
        }
    },
    
    methods: {
        addMember: function() {
            if(this.members.fname && this.members.lname && this.members.instrument) {
                this.members.push(this.newMember);
                this.newMember = {};
            } else {
                alert("Todos os campos devem ser preenchidos.");
            }

        }
    }

};

Vue.createApp(handlingForms).mount('#app');
