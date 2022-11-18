let code = 0;

function controller(n){
    code = code + n;
    slideshow(code);
}

function slideshow(num){
    let slides = document.getElementsByClassName("slide");

    if(num == slides.length){
        code = 0;
        num = 0;
    }

    if(num < 0){
        code = slides.length-1;
        num = slides.length-1;
    }

    for(let y of slides){
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}
slideshow(code);