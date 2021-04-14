// var listImg = ['1.jpg', '2.jpg', '3.jpg'];

function funcPre() {
    var imgCurrent = document.getElementById('imgCur');
    var valueImgCurrent = imgCurrent.getAttribute('src');
    if (valueImgCurrent == 'images/1.jpg') {
        imgCurrent.setAttribute('src', 'images/3.jpg');
    } else if (valueImgCurrent == 'images/2.jpg') {
        imgCurrent.setAttribute('src', 'images/1.jpg');
    } else {
        imgCurrent.setAttribute('src', 'images/2.jpg');
    }
    setTimeout(funcPre, 2000);
}

function funcNext() {
    var imgCurrent = document.getElementById('imgCur');
    var valueImgCurrent = imgCurrent.getAttribute('src');
    if (valueImgCurrent == 'images/1.jpg') {
        imgCurrent.setAttribute('src', 'images/2.jpg');
    } else if (valueImgCurrent == 'images/2.jpg') {
        imgCurrent.setAttribute('src', 'images/3.jpg');
    } else {
        imgCurrent.setAttribute('src', 'images/1.jpg');
    }
    setTimeout(funcNext, 2000);
}

setTimeout(funcNext, 2000);