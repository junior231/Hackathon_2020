// imports come first
import promotionComponent from "./promotionComponent.js"
export default {
    template: `
        <div class="container"
            <div class="row">
                <div class="">
                    <h1 class=""> {{ message }} </h1>
                </div>
            </div>
        </div>
    `,

    data: {
        function() {
            return {
                message: "Who's using Roku",
                userList: []
            }
    },

    created: function() {
        this.fetchAllUsers();
    },

    methods: {
        fetchAllUsers() {
            let url = `./includes/index.php?getUsers=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => {this.userList = data})
            .catch((err) => { console.log(err)})
        }
    },

    components: {
        user: promotionComponent
    }
}
}