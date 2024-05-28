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
        // audio.addEventListener("loadeddata",()=>{
        //     let duration = audio.duration;
        //     console.log(duration);
        // }
    });
}
main();
