export default {
    template: `
    <div id="hero">
            
        <video src="video/real_vid.mp4" loop muted autoplay></video>
            
            <p>Discover all the things you need to plan your next trip...to Ontario! From amazing cities, to quaint countrysides Ontario has more than enough scenic experiences to offer everyone this summer.</p>
            <h1>Welcome to</h1>
            <img src="images/logo-web.svg" alt="logo">
            <div class="divide"></div>
        </div>

        <div id="locations">
            <h2>Popular Locations</h2>
            <p>Chosen By Our <span>travel experts</span></p>
            <div v-for='location in locations' class="location">
                <h3>{{location.loc}}</h3>
                <img v-bind:src="location.img" alt="location image">
                <p>{{location.desc}}</p>
                <div class="divide"></div>
            </div>
            
        </div>

        <div id="signUp">
            <h2>Love Ontario?</h2>
            <p>Sign Up to book a trip!</p>
            <div class="formLink">
                <a href="admin/sign-up.php" class='signup'>Sign Up!</a>
                <a href="admin/sign-up.php" class='login'>Login</a>
            </div>
           
        </div>
    `
}