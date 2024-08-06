let board = ['','','','','','','','',''];
let currentPlayer = 'X';
let gameActive = true;

function makeMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('message').innerText = `${currentPlayer} Wins!`;
            gameActive = false;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('message').innerText = 'It\'s a Tie!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => 
        board[pattern[0]] === currentPlayer &&
        board[pattern[1]] === currentPlayer &&
        board[pattern[2]] === currentPlayer
    );
}

function resetGame() {
    board = ['','','','','','','','',''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('message').innerText = '';
    Array.from(document.getElementsByClassName('cell')).forEach(cell => cell.innerText = '');
}
