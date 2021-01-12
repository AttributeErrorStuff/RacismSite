let home = document.getElementById("home");
let forum = document.getElementById("forum");
let project = document.getElementById("project");
let vids = document.getElementById("vids");
let other = document.getElementById("other");

home.onclick = function() {
    window.location.assign("index.html");
}

forum.onclick = function() {
    window.location.assign("forum.html");
}

project.onclick = function() {
    window.location.assign("project.html");
}

vids.onclick = () => {
    window.location.assign("videos.html")
}

other.onclick = function() {
    window.location.assign("other.html");
}