function view() {
    document.getElementById('viewMenu').style.display="none";
    document.getElementById('hideMenu').style.display="inline-block";
    document.getElementById('nav').style.right="0%";
}
function hide() {
    document.getElementById('hideMenu').style.display="none";
    document.getElementById('viewMenu').style.display="inline-block";
    document.getElementById('nav').style.right="-100%";
}