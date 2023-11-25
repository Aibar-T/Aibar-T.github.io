    function playMusic(){
    var music = new Audio('sound.mp3');
    music.play();
    }
    let te=document.querySelector('.headText_1');
    te.addEventListener('mouseover', function(){
        te.style.color = "gray";
    })
    te.addEventListener('mouseout', function(){
        te.style.color = "white"
      })