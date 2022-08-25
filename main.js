window.addEventListener('load', (event) => {
    let welcomeText = document.querySelector(".welcome");
    welcomeText.style.opacity =  "1";
    welcomeText.style.left = "5%";
  });

window.addEventListener('scroll', () => {
    let items = document.querySelectorAll('.item');
    let screenPosition = window.innerHeight / 1.1;
    for(var i = 0; i < items.length; i++) {
        let s = items[i].getBoundingClientRect().top;
        if(s.toFixed() < screenPosition) {
            items[i].classList.add("active");
        } 
    }
    if(window.innerHeight <= 544) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector('.logo').style.transform = 'translate(20px, 10px)';
            document.querySelector('.song-button').style.transform = 'translateY(0px)';
        } else {
            document.querySelector('.logo').style.transform = 'translate(20px, -80px)';
            document.querySelector('.song-button').style.transform = 'translateY(-80px)';
        }
    }
});

// song button
let songButton = document.querySelector('.song-button');
document.getElementById("myAudio").pause();
songButton.addEventListener('click', () => {
    songButton.childNodes[5].classList.toggle('song-button-toggle');
    let myAudio = document.getElementById("myAudio");
    if(this.myAudio.paused == true) {
        myAudio.play();
        document.querySelector('.toggle').textContent = 'ON';
    }
     else {
        myAudio.pause();
        document.querySelector('.toggle').textContent = 'OFF';
    }

})