let turn = 'X'
let title = document.getElementById("x_o")
let title2 = document.getElementById("title")
let squares = []
let gameOver = false

function done(num1, num2, num3) {
    title2.innerHTML = `${squares[num1]} Wins! `

    document.getElementById("item" + num1).style.background = "green"
    document.getElementById("item" + num2).style.background = "green"
    document.getElementById("item" + num3).style.background = "green"

    gameOver = true

    setTimeout(() => {
        location.reload()
    }, 3000)
}

function checkDraw() {
    for (let i = 1; i <= 9; i++) {
        if (squares[i] === '') return false
    }

    title2.innerHTML = "Draw"
    gameOver = true

    setTimeout(() => {
        location.reload()
    }, 3000)

    return true
}

function winner() {
    for (let i = 1; i <= 9; i++) {
        squares[i] = document.getElementById("item" + i).innerHTML
    }

    if (squares[1] && squares[1] == squares[2] && squares[2] == squares[3]) done(1,2,3)
    else if (squares[4] && squares[4] == squares[5] && squares[5] == squares[6]) done(4,5,6)
    else if (squares[7] && squares[7] == squares[8] && squares[8] == squares[9]) done(7,8,9)
    else if (squares[1] && squares[1] == squares[4] && squares[4] == squares[7]) done(1,4,7)
    else if (squares[2] && squares[2] == squares[5] && squares[5] == squares[8]) done(2,5,8)
    else if (squares[3] && squares[3] == squares[6] && squares[6] == squares[9]) done(3,6,9)
    else if (squares[1] && squares[1] == squares[5] && squares[5] == squares[9]) done(1,5,9)
    else if (squares[3] && squares[3] == squares[5] && squares[5] == squares[7]) done(3,5,7)
    else checkDraw()
}

function game(id) {
    if (gameOver) return

    let el = document.getElementById(id)

    if (el.innerHTML === '') {
        el.innerHTML = turn

        winner()   

        if (gameOver) return

        turn = (turn === 'X') ? 'O' : 'X'
        title.innerHTML = "Its turn of"
        title2.innerHTML = turn
    }
}
