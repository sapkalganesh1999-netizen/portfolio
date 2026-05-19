!function () {

    var u = window.UnicornStudio;

    if (u && u.init) {

        if (document.readyState === "loading") {

            document.addEventListener("DOMContentLoaded", function () {
                u.init();
            });

        } else {
            u.init();
        }

    } else {

        window.UnicornStudio = {
            isInitialized: false
        };

        var i = document.createElement("script");

        i.src =
            "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.12/dist/unicornStudio.umd.js";

        i.onload = function () {

            if (document.readyState === "loading") {

                document.addEventListener("DOMContentLoaded", function () {
                    UnicornStudio.init();
                });

            } else {
                UnicornStudio.init();
            }
        };

        (document.head || document.body).appendChild(i);
    }

}();
let lastScroll = 0;

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    let currentScroll = window.pageYOffset;

    // Scroll Down
    if(currentScroll > lastScroll){
        header.classList.add("hide");
    }

    // Scroll Up
    else{
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});