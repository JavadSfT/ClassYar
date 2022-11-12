// Show Clock
setInterval(Time, 100);
function Time() {
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    document.getElementById("Clock").innerHTML = time;
}

// hidden Items
window.addEventListener("resize", Width);
if (window.innerWidth < 600) {
    Width();
}

function Width() {
    let All = document.querySelector('#hide');
    let hide = document.querySelector('#hidden');
    let body = document.querySelector('body');

    let WidthSize = window.innerWidth;
    if (WidthSize < 600) {
        body.style = "background-color: #c3c3c3;"
        All.style = "display : none;";
        hide.style = "display: block";
    }
    else {
        body.style = "background-color: #fff;"
        All.style = "display: block;";
        hide.style = "display: none;";
    }
};