console.log("js....");
async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/spotify/songs/");
    let response = await a.text(); // Await for the response text
    console.log(response); // Logging the response

    let div = document.createElement("div"); // Create a div element
    div.innerHTML = response; // Assign response HTML to the div's innerHTML
    let as = div.getElementsByTagName("a");
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp4")) {
            // Extracting song name from URL
            let songName = element.href.split("/").pop().split(".mp4")[0];
            songs.push(songName);
        }
    }
    return songs;
}
async function main() {
    let songs = await getsongs(); // Await for the songs
    console.log("songs", songs); // Logging the songs
    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0];
    for(const song of songs){
        songul.innerHTML = songul.innerHTML + `<li>${song.replaceAll("%20"," ")}</li>`;
    }
    console.log("Play button clicked!");
    document.getElementById("play").addEventListener("click", function() {
        console.log("Play button clicked!");
        var audio = new Audio(songs[0]);
        audio.play();
        audio.addEventListener("loadeddata",()=>{
            let duration = audio.duration;
            console.log(duration);
           
        })
    });
}
main();
