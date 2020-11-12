
// console.log('=^.^= =^.^= =^.^=')

const board = []
const table=document.getElementById('table')

function play(clickedId){
    const playerSpan=document.getElementById('player')
    const clickedElement=document.getElementById(clickedId)
    console.log(clickedElement)

    if(playerSpan.innerText === 'X' && board[clickedId] === undefined){
        playerSpan.innerText = 'O'
        board[clickedId] = 'X'
        clickedElement.innerText = 'X'
    } else if (board[clickedId] === undefined){
        playerSpan.innerText = 'X'
        board[clickedId] = 'O'
        clickedElement.innerText ='O'
    }

    // console.log(board)
    
    // 012 1
    if(board[0] !== undefined && board[0] === board[1] && board[0] === board[2]){
        alert(`${board[0]} is the winner`)
    }
    // 345 2
    if(board[3] !== undefined && board[3] === board[4] && board[3] === board[5]){
        alert(`${board[3]} is the winner`)
    }
    // 678 3
    if(board[6] !== undefined && board[6] === board[7] && board[6] === board[8]){
        alert(`${board[6]} is the winner`)
    }
    // 036 4
    if(board[0] !== undefined && board[0] === board[3] && board[0] === board[6]){
        alert(`${board[0]} is the winner`)
    }
    // 147 5
    if(board[1] !== undefined && board[1] === board[4] && board[1] === board[7]){
        alert(`${board[1]} is the winner`)
    }
    // 258 6
    if(board[2] !== undefined && board[2] === board[5] && board[2] === board[8]){
        alert(`${board[2]} is the winner`)
    }
    // 048 7
    if(board[0] !== undefined && board[0] === board[4] && board[0] === board[8]){
        alert(`${board[0]} is the winner`)
    }
    // 246 8
    if(board[2] !== undefined && board[2] === board[4] && board[2] === board[6]){
        alert(`${board[2]} is the winner`)
    }
    
    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
      if (board[i] === undefined) {
        boardFull = false;
      }
    }
    if (boardFull === true) {
      alert('=^.^= cats game =^.^=')
    }
}

