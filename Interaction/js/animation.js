var run = document.getElementById('run');
var isEnter = false;
document.addEventListener('mousemove', function (e) {
    if (isEnter) return
    run.style.display = 'block';
    run.style.top = e.clientY + 'px';
    run.style.left = e.clientX - 2 + 'px';
    });
var a = document.getElementsByTagName('a');
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('mouseenter', function () {
    isEnter = true;
    if(myPage) {
        run.src = '../img/indexRun.gif'
    } else {
        run.src = 'img/indexRun.gif'
    }
    })
a[i].addEventListener('mouseleave', function () {
    isEnter = false;
    if(myPage) {
        run.src = '../img/run.gif'
    } else {
        run.src = 'img/run.gif'
    }
    })
}
