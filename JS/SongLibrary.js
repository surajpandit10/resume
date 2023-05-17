console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songplaypause = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName: "Let it be", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Kalandar", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Maahi ve", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Heer Ranjha", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "People", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Is it just me", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Older", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Tum se hi", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Goona be okay", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Snap", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},

    {songName: "Badshah - Paani Paani", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Akull - I Love You ", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Kya Mujhe Pyar Hai", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "KALEO - Way Down We Go", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Lil Nas X - MONTERO", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "The Bilz & Kashif - Su Kare Che", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Aap Ki Nazron Ne Samjha", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Falak Tak chal saath mere", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Vilen - Ek Raat", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "Yaar Haryane Te", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
 
    if(audioElement.paused || audioElement.currentTime<=0){
    
        audioElement.play();

        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();

        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');

    }
    
})

 
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
       
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
        }
        else{

            audioElement.pause();
        }
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 


        if(audioElement.paused || audioElement.currentTime<=0){
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
        }
        else{
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.pause();
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
    
        }
        
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
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})