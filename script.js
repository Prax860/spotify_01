console.log("js....");
async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/spotify/songs/");
    let response = await a.text(); // Await for the response text
    console.log(response); // Logging the response

    let div = document.createElement("div"); // Create a div element
    div.innerHTML = response; // Assign response HTML to the div's innerHTML
    let as = div.getElementsByTagName("a");
    let song = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp4")) {
            song.push(element.href);
        }
    }
    return song;
}
async function main() {
    let songs = await getsongs(); // Await for the songs
    console.log("songs", songs); // Logging the songs
    document.getElementById("play").addEventListener("click", function() {
        var audio = new Audio(songs[0]);
        audio.play();
        audio.addEventListener("loadeddata",()=>{
            let duration = audio.duration;
            console.log(duration);
        })
    });
}
main();
// console.log("js....");

//         async function getsongs() {
//             let a = await fetch("http://127.0.0.1:5500/spotify/songs/");
//             let response = await a.text();
//             console.log(response);

//             let div = document.createElement("div");
//             div.innerHTML = response;
//             let as = div.getElementsByTagName("a");
//             let song = [];
//             for (let index = 0; index < as.length; index++) {
//                 const element = as[index];
//                 if (element.href.endsWith(".mp4")) {
//                     song.push(element.href);
//                 }
//             }
//             return song;
//         }

//         let songs = getsongs();
//         let currentSongIndex = 0;
//         let audioElement = new Audio();

//         async function playSong() {
//             currentSongIndex = (currentSongIndex + 1) % songs.length;
//             let song = songs[currentSongIndex];
//             audioElement = new Audio(song);
//             audioElement.play();
//             document.getElementById("song-title").innerText = await (await fetch(song)).text();
//             document.getElementById("play").style.display = "none";
//             document.getElementById("pause").style.display = "inline-block";
//             audioChangeMethod(audioElement, updateSongDetails);
//         }

//         function pauseSong() {
//             audioElement.pause();
//             document.getElementById("play").style.display = "inline-block";
//             document.getElementById("pause").style.display = "none";
//         }

//         function stopSong() {
//             audioElement.pause();
//             audioElement.currentTime = 0;
//             document.getElementById("play").style.display = "none";
//             document.getElementById("pause").style.display = "none";
//         }

//         function updateSongDetails() {
//             document.getElementById("song-title").innerText = audioElement.currentSrc;
//             document.getElementById("current-time").innerText = formatTime(audioElement.currentTime);
//             document.getElementById("duration").innerText = formatTime(audioElement.duration);
//         }

//         function formatTime(seconds) {
//             let minutes = Math.floor(seconds / 60);
//             seconds = Math.floor(seconds % 60);
//             if (minutes < 10) minutes = "0" + minutes;
//             if (seconds < 10) seconds = "0" + seconds;
//             return minutes + ":" + seconds;
//         }

//         function audioChangeMethod(audio, callback) {
//             audio.ontimeupdate = callback;
//         }

//         document.getElementById("play").addEventListener("click", playSong);
//         document.getElementById("pause").addEventListener("click", pauseSong);
//         document.getElementById("stop").addEventListener("click", stopSong);

