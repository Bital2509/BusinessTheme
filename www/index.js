let firstDot = document.getElementById('firstDot');
let secondDot = document.getElementById('secondDot');
let thirdDot = document.getElementById('thirdDot');

let firstImg = document.getElementById('firstImg');
let secondImg = document.getElementById('secondImg');
let thirdImg = document.getElementById('thirdImg');

firstDot.addEventListener('click', function () {
    firstImg.classList.toggle('inner-img_active');
    firstDot.classList.toggle('dot_active');

    secondImg.classList.remove('inner-img_active');
    thirdImg.classList.remove('inner-img_active');

    secondDot.classList.remove('dot_active');
    thirdDot.classList.remove('dot_active');
});

secondDot.addEventListener('click', function () {
    secondImg.classList.toggle('inner-img_active');
    secondDot.classList.toggle('dot_active');

    firstImg.classList.remove('inner-img_active');
    thirdImg.classList.remove('inner-img_active');

    firstDot.classList.remove('dot_active');
    thirdDot.classList.remove('dot_active');
});

thirdDot.addEventListener('click', function () {
    thirdImg.classList.toggle('inner-img_active');
    thirdDot.classList.toggle('dot_active');

    firstImg.classList.remove('inner-img_active');
    secondImg.classList.remove('inner-img_active');

    firstDot.classList.remove('dot_active');
    secondDot.classList.remove('dot_active');
});