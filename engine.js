const block = document.getElementById('block');
const start = document.getElementById('start');
const body = document.querySelector('body');
const bird = document.querySelector('#bird');
const cf = document.querySelector('.container-flappy');
const cw = document.querySelector('.container-wall');
const over = document.querySelector('h1');
const score = document.querySelector('#scr');
// const alert = document.querySelector('.alert');
let lr = 300;
let tb = 0;

let a = 0;
let b = 300;
let c = 500;

let stWall = 1;
let idWall = 2;

let wall = 500;

// console.log();

start.addEventListener('click', (e) => {
    if (e.isTrusted) {
        document.querySelector('.title').style.display = 'none';
        setInterval(function () {
            lr += 30;
            wall -= 30;
            if (lr >= 500) {
                bird.style.top = '500px';
                over.style.display = 'block';
                cf.style.filter = 'brightness(70%)';
            } else {
                stWall += 1;
                const wt = document.querySelector('#wall-top');
                const wb = document.querySelector('#wall-bot');
                bird.style.top = lr + 'px';
                if (wall > 50) {
                    wt.style.left = wall + 'px';
                    wb.style.left = wall + 'px';
                } else {
                    wall = 500;
                    wt.style.left = '500px';
                    wb.style.left = '500px';
                }
            }
        }, 700);

        setInterval(function () {
            if (wall == 320) {
                tb += 1;
                score.innerHTML = tb;
            }
        }, 700);

        window.addEventListener('keypress', (e) => {
            if (e.key == ' ') {
                lr -= 30;
                bird.classList.add('active');
                bird.style.top = lr + 'px';
                // bird.style.transform = 'rotateZ(-50deg)';
                // setTimeout(() => {
                //     bird.style.transform = 'rotateZ(0deg)';
                // }, 200);
            }
        });

        // setInterval(function () {
        //     idWall += 1;
        //     a += Math.floor(Math.random() * 100) + 10;
        //     b -= Math.floor(Math.random() * 100) + 30;
        //     c += Math.floor(Math.random() * 100) + 190;
        //     cw.innerHTML += '<div class = "wall-top" id = "wall-top' + idWall + '">';
        //     cw.innerHTML += '<div class = "wall-bot" id = "wall-bot' + idWall + '">';
        //     document.getElementById('wall-top' + idWall).style.left = c + 'px';
        //     document.getElementById('wall-bot' + idWall).style.left = c + 'px';
        //     document.getElementById('wall-top' + idWall).style.top = a + 'px';
        //     document.getElementById('wall-bot' + idWall).style.top = b + 'px';
        // }, 3000);

        // setInterval(function () {
        //     // let sl = wt.style.left.substring(0, 3);
        //     // let st = lr.substring(0, 3);
        //     if (wall <= 360 && lr <= 150) {
        //         if (wall >= 290) {
        //             // wall = wall;
        //             // lr = lr;
        //             bird.style.top = lr + 'px';
        //             wt.style.left = wall + 'px';
        //             wb.style.left = wall + 'px';
        //             over.style.display = 'block';
        //             cf.style.filter = 'brightness(70%)';
        //         }
        //     } else {
        //         // console.log('false')
        //     }
        // }, 100);
    }
});
over.addEventListener('click', (e) => {
    location.reload(true);
    // document.querySelector('.title').style.display = 'block';
});


// block.addEventListener('click', (e) => {
//     if (e.isTrusted) {
//         let l = e.clientX - 100;
//         let r = e.clientX;
//         let t = e.clientY - 100;
//         let b = e.clientY;
//         const rt = lr;

//         if (block.classList.contains('active') != true) {
//             block.classList.add('active');
//             if (block.classList.contains('active') == true) {
//                 window.addEventListener('mousemove', (e) => {
//                     block.style.left = e.clientX - 100 + 'px';
//                     block.style.right = e.clientX + 'px';
//                     block.style.top = e.clientY - 100 + 'px';
//                     block.style.bottom = e.clientY + 'px';
//                 });
//                 window.addEventListener('keypress', (e) => {
//                     lr += 5;
//                     if (e.key == 'r') {
//                         block.style.transform = 'rotate(' + lr + 'deg)';
//                     }
//                 });
//             }
//         } else {
//             block.classList.remove('active');
//             window.addEventListener('mousemove', (e) => {
//                 block.style.left = l + 'px';
//                 block.style.right = r + 'px';
//                 block.style.top = t + 'px';
//                 block.style.bottom = b + 'px';
//             });
//             window.addEventListener('keypress', (e) => {
//                 if (e.key == 'r') {
//                     block.style.transform = 'rotate(' + rt + 'deg)';
//                 }
//             });
//         }
//     }
// });

// body.addEventListener('keypress', (e) => {
//     if (e.key == 'd') {
//         if (lr >= 1160) {

//             lr = 1160;
//         }
//         lr += 5;
//         block.style.left = lr + 'px';
//     }
//     if (e.key == 'a') {
//         if (lr <= 0) {
//             if (lr < 0) {
//                 alert.style.display = 'flex';
//             }
//             lr = 0;
//         }
//         setTimeout(function () {
//             alert.style.display = 'none';
//         }, 10000);
//         lr -= 5;
//         block.style.left = lr + 'px';
//     }
//     if (e.key == 'w') {
//         tb -= 5;
//         block.style.top = tb + 'px';
//     }
//     if (e.key == 's') {
//         tb += 5;
//         block.style.top = tb + 'px';
//     }
//     if (e.key == 'r') {
//         block.classList.add('roll');
//         setTimeout(function () {
//             block.classList.remove('roll');
//         }, 3000);
//     }
//     // if (e.key == 'c') {
//     //     if (block.classList.contains('active')) {
//     //         block.classList.remove('circle');
//     //     }
//     //     block.classList.add('active');
//     //     block.classList.add('circle');
//     //     // block.style.borderRadius = '50%';
//     // }
// });

// setInterval(function () {
//     if (tb >= 492) {
//         tb = 492;
//     }
//     tb += 5;
//     block.style.top = tb + 'px';
// }, 1000);


// alert.addEventListener('click', (e) => {
//     alert.style.display = 'none';
// });
