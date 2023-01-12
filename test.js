
function send(){
    emailjs.send("service_7iaffzl","template_c3usnfw",{
        from_name: `${document.getElementById('your_Name').value} with Mobil Number: ${document.getElementById("MobilInput").value}`,
        to_name: `Eng: Abo Badr `,
        message: document.querySelector('textarea').value,
        email_to: "almstr505@gmail.com",
    }).then(function(res){
        alert("Thanks For Message Me! "+ res.status);
        document.getElementById("your_Name").value = "";
        document.getElementById("MobilInput").value = "";
        document.querySelector('textarea').value = "";        
    }),function(error){
        alert("Failed To Send" + error)
    }
}
document.getElementById("send").addEventListener("click", send);



  anime.timeline({loop: true})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    opacity: 1,
    duration: 100000,
    easing: "easeOutExpo",
    delay: 1000
  });



  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 1,
    duration: 100000,
    easing: "easeOutExpo",
    delay: 1000
  });




  