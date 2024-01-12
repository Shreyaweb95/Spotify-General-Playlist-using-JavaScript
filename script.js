// console.log('welcome');

// Initilize the variable
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay= document.getElementById('masterplay');
let myprogressBar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {
        songname:"Let-Me-Love-You",
        filepath:"songs/1.mp3",
        coverpath:"cover/1.jpg"
    },
    {
        songname:"Lutt-Putt-Gaya",
        filepath:"songs/2.mp3",
        coverpath:"cover/2.jpg"
    },
    {
        songname:"Pyaar-Manga-Hai",
        filepath:"songs/3.mp3",
        coverpath:"cover/3.jpg"
    },
    {
        songname:"Tum-Mile(PaglaSongs)",
        filepath:"songs/4.mp3",
        coverpath:"cover/4.jpg"
    },
    {
        songname:"Kabhi-Shaam-Dhale",
        filepath:"songs/5.mp3",
        coverpath:"cover/5.jpg"
    },
    {
        songname:"Heeriye(PaglaSongs)",
        filepath:"songs/6.mp3",
        coverpath:"cover/6.jpg"
    },
    {
        songname:"Ek-Mulaqaat(PaglaSongs)",
        filepath:"songs/7.mp3",
        coverpath:"cover/7.jpg"
    },
    {
        songname:"Jitni-Ada-Utni-Wafa",
        filepath:"songs/8.mp3",
        coverpath:"cover/8.jpg"
    },
    {
        songname:"Barsaat-Aa-Gayi",
        filepath:"songs/9.mp3",
        coverpath:"cover/9.jpg"
    },
    {
        songname:"Banda(PaglaSongs)",
        filepath:"songs/10.mp3",
        coverpath:"cover/10.jpg"
    }
]

songitems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
})
// audioElement.play();

// play pause event

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity=0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt(audioElement.currentTime/audioElement.duration*100);
    console.log(progress);
    myprogressBar.value=progress;
})

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressBar.value*audioElement.duration/100;

})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songplayitem')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songplayitem')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})  
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}) 


 