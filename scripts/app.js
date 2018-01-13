const bellSound = new Audio('bell-ding.wav');
const app = new Vue ({
    el: "#main",

    mounted: function() {
        fetch("https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten")
        .then(res => res.json())
        .then(jokes => {
            //attach results to jokes array
            this.jokes = jokes;
            //set selectedJoke to first joke
            this.selectedJoke = this.jokes[0];
        })
        //to catch errors
        .catch(err => console.log(err));
    },
    data: {
        message: "hello Vue!",
        jokes: [],
        selectedJoke: {}

    },
    
    methods: {
        bellSoundFunction: function() {
            bellSound.currentTime = 0;
            bellSound.play();
        },
        getPunchline: function(selectedJoke) {
            this.bellSoundFunction();
            alert(app.selectedJoke.punchline);
            
        },
        refresh: function() {
            location.reload();
        }
    }
});