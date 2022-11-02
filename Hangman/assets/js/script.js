let letters = Array.from(document.getElementsByClassName('letters'))
let answerZone = document.getElementsByClassName('answerzone')[0]
let ptag = document.getElementsByClassName('theanswer')
let canvas = document.getElementById('hangman');
let cdx = canvas.getContext("2d");
let g = 0;
let lose = 0;


let thisGame = new ChoosWord();
thisGame.creatGame()
let char = wordChars(thisGame)

letters.forEach((letter, i) => {
    letter.onclick = () => {
        letters.forEach((lets, j) => {
            if (i == j) {
                let ex = exsist(char, lets)
                if (ex.length) {
                    letterFill(ex, lets)
                    let wining = winn()
                    if (wining) {
                        setTimeout(() => {
                            alert("congrats you won")
                            clear(letter, lets)
                        }, 1000)
                    }
                    lets.style.display = 'none'
                } else {
                    lose++
                    Draw(lose)
                    lets.style.display = 'none'
                    if (lose == 9) {
                        setTimeout(() => {
                            alert("you loste")
                            clear()
                        },300)
                    }

                }
            }
        })
    }
})

function wordChars(game) {
    let z = game.theword
    let arr = []
    for (let i = 0; i < z.length; i++) {
        arr.push(z[i])
    }
    return arr
}

function exsist(arr, letter) {
    letter = letter.innerHTML
    let nums = []
    let num = 0
    let g = 0
    while (g != arr.length) {
        let doble = arr.indexOf(letter, num)
        if (doble != -1) {
            nums.push(doble)
            num = doble + 1
        }
        g++
    }
    return nums
}


function letterFill(place, letter) {
    for (let i = 0; i < place.length; i++) {
        ptag[place[i]].innerHTML = letter.innerHTML
        g++
    }
}

function winn() {
    console.log(g);
    if (g != ptag.length) {
        return false
    } else {
        return true
    }
}

function clear() {
    g = 0;
    lose = 0
    for (let i = 0; i < ptag.length; i++) {
        ptag[i].innerHTML = ""
    }
    for (let j = 0; j < letters.length; j++) {

        letters[j].style.display = 'block'
    }
    clearCanvas()
    g = 0;
    lose = 0
}

function clearCanvas() {
    cdx.clearRect(0, 0, canvas.width, canvas.height)
}

function Draw(lose) {
    switch (lose) {
        case 1:
            cdx.strokeStyle = '#444';
            cdx.lineWidth = 10;
            cdx.beginPath();
            cdx.moveTo(175, 225);
            cdx.lineTo(5, 225);
            cdx.moveTo(40, 225);
            cdx.lineTo(25, 5);
            cdx.lineTo(100, 5);
            cdx.lineTo(100, 25);
            cdx.stroke();
            break;

        case 2:
            cdx.lineWidth = 5;
            cdx.beginPath();
            cdx.arc(100, 50, 25, 0, Math.PI * 2, true);
            cdx.closePath();
            cdx.stroke();
            break;

        case 3:
            cdx.beginPath();
            cdx.moveTo(100, 75);
            cdx.lineTo(100, 140);
            cdx.stroke();
            break;

        case 4:
            cdx.beginPath();
            cdx.moveTo(100, 85);
            cdx.lineTo(60, 100);
            cdx.stroke();
            break;

        case 5:
            cdx.beginPath();
            cdx.moveTo(100, 85);
            cdx.lineTo(140, 100);
            cdx.stroke();
            break;

        case 6:
            cdx.beginPath();
            cdx.moveTo(100, 140);
            cdx.lineTo(80, 190);
            cdx.stroke();
            break;

        case 7:
            cdx.beginPath();
            cdx.moveTo(82, 190);
            cdx.lineTo(70, 185);
            cdx.stroke();
            break;

        case 8:
            cdx.beginPath();
            cdx.moveTo(100, 140);
            cdx.lineTo(125, 190);
            cdx.stroke();
            break;

        case 9:
            cdx.beginPath();
            cdx.moveTo(122, 190);
            cdx.lineTo(135, 185);
            cdx.stroke();
            break;
    }
}