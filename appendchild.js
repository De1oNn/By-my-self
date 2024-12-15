const gameBoard = document.getElementById('game-board');

const boardSize = 40;
for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cell');

const parentElement = document.getElementById('parent'); // Get the parent element
const newChild = document.createElement('div'); // Create a new div element
newChild.textContent = 'Hello, World!'; // Add some text to the new element
parentElement.appendChild(newChild); // Append the new element to the parent