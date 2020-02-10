export default {
    template: `
    <section>
        <h1>{{ message }}</h1>
        <button @click="registerUser">Sign up for Updates/button>
    </section>
    `,

    data: function() {
        return {
            message: "Welcome to Ontario Tourism Project!"
        }
    },

    methods: {
        registerUser() {
            console.log('clicked register button');
        }
    }
}