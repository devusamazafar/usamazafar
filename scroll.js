let mybtn = document.getElementById("btn");


function btn() {
    let interval = null;
    interval = setInterval(function () {
        document.documentElement.scrollTop -= 25;
        if (document.documentElement.scrollTop == 0) {
            clearInterval(interval);
        }
    }, 1000 / 100);

}


