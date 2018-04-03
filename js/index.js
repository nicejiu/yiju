//banner
{
    let banner = document.querySelectorAll(".banner_img_i");
    let dian = document.querySelectorAll(".banner_lunbo_1");
    let box = document.querySelector("#banner");
    dian.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < dian.length; i++) {
                dian[i].classList.remove("banner_lunbo_2");
                banner[i].classList.remove("banner_index");
            }
            this.classList.add("banner_lunbo_2");
            banner[index].classList.add("banner_index");
            n = index;
        }
    });
    let n = 0;
    function move() {
        n++;
        if (n === dian.length) {
            n = 0;
        }
        if (n < 0) {
            n = dian.length - 1;
        }
        for (let i = 0; i < dian.length; i++) {
            dian[i].classList.remove("banner_lunbo_2");
            banner[i].classList.remove("banner_index");
        }
        dian[n].classList.add("banner_lunbo_2");
        banner[n].classList.add("banner_index");
    }

    let t = setInterval(move, 3000);
    box.onmouseenter = function () {
        clearInterval(t);
    };
    box.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
}