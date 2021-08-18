'use strict';


const songs = [
    "bensound-creativeminds.mp3",
    "bensound-happyrock.mp3",
    "bensound-jazzyfrenchy.mp3",
    "bensound-littleidea.mp3"
];

const player = document.getElementById('player');



// CREAR UN BLOQUE QUE RECORRA LAS CANCIONES Y LAS TOQUE

function createSongList(){
    const list = document.createElement("ol");

    for(let i = 0; i < songs.length; i++){

        const item =  document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list
}



const songList = document.getElementById('songList')
songList.appendChild(createSongList());

// PARA QUE NO APAREZCAN TODAS LAS CANCIONES AL MOMENTO DE DAR
const links = document.querySelectorAll('li');
for(const link of links){

    link.addEventListener('click', setSong);
}



function setSong(e){

    document.querySelector('#headphones').classList.remove("pulse");

    // ACCEDE A LAS CANCIONES CON EL CLICK Y DA EL NOMBRE DE LA ROLA
    const source = document.getElementById('source')
    source.src = "./songs/"+ e.target.innerText;

    document.querySelector('#currentSong').innerHTML = `Reproduciendo ahora: <br>
    ${e.target.innerText}`;

    player.load()
    player.play();

    // ANIMACIÓN DE HEADPHONES
    document.querySelector('#headphones').classList.add("pulse");
}

function playAudio(){
    // READY STATE ES UN MÉTODO
    if(player.readyState){
        player.play();
    }
}


// FUNCIÓN DE PAUSA
function pauseAudio(){
    player.pause();
}


// VOLUMEN
const slider = document.getElementById('volumeSlider');

// SELECCIONAMOS EL "VALOR" TRAS RECOGER EL EVENTO (PUEDES BUSCAR VALUE EN LA CONSOLA CON EL EVENTO)
slider.oninput = function(e){

    


    const volume = e.target.value
    player.volume = volume;


    
}


// BARRA DE PROGRESO
function updateProgress(){
    if(player.currentTime > 0){
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100;
    }
}

