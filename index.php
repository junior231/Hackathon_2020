<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.15/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <link rel="stylesheet" href="css/main.css">
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/066bb77ccc.js" crossorigin="anonymous"></script>

    <title>Ontario Summer Tourism</title>
</head>
<body>
    <main id="app">
        <header class="header">
            <div class='white'>
                <a href="#hero">
                    <img src="images/logo-mobile-nowordmark.svg" alt="logo" class='mobileLogo'>
                    <img src="images/logo-web.svg" alt="logo" class='deskLogo'>
                </a>
                <div class="burger">
                    <div class="bLine"></div>
                    <div class="bLine"></div>
                    <div class="bLine"></div>
                </div>

            </div>
            

            <nav class="mainNav">
                <ul class="navList">
                    <a href="#hero"><li class="navItem">Home</li></a>
                    <a href="#about"><li class="navItem">Tourism Ontario</li></a>
                    <a href="#locations"><li class="navItem">Popular Locations</li></a>
                    <a href=""><li class="navItem">Sign Up</li></a>
                </ul>
            </nav>
        </header>
<div class="webcon">
<div id="hero">
            
        <video src="video/real_vid.mp4" loop muted autoplay></video>
            
            <p>Discover all the things you need to plan your next trip...to Ontario! From amazing cities, to quaint countrysides Ontario has more than enough scenic experiences to offer everyone this summer.</p>
            <div class='con'>
                <h1>Welcome to</h1>
            <img src="images/logo-web.svg" alt="logo">
            </div>
            
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

</div>
        
        
        
    <footer class="footer">
        <nav class="footerNav">
            <ul class="navList">
                <a href="#hero"><li class="navItem">Home</li></a>
                <a href="#hero"><li class="navItem">Tourism Ontario</li></a>
                <a href="#locations"><li class="navItem">Popular Locations</li></a>
                <a href=""><li class="navItem">Sign Up</li></a>
            </ul>
        </nav>


        <div class="social">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
    </footer>
    </main>
    <script src="js/main.js" type="module"></script>
</body>
</html>