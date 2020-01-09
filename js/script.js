var popup = document.getElementById('popup');

// window.onmousemove = function (e) {
//     popup.style.opacity = 1

//     var x = e.clientX,
//         y = e.clientY;
//     popup.style.top = (y + 20) + 'px';
//     popup.style.left = (x + 20) + 'px';
// };
var xxx
var yyy
window.onmousemove = function(e) {
    xxx = e.clientX;
    yyy = e.clientY;
}

function pinClick() {
    let xxxx = (xxx+20) + 'px';
    let yyyy = (yyy+20) + 'px';

    document.getElementById('testtext').x = xxx
    document.getElementById('testtext').y = yyy

    document.getElementById('testtext').style.opacity=1


}
