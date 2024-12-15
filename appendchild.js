const gameBoard = document.getElementById('game-board');

const boardSize = 40;
for (let i = 0; i < boardSize * boardSize; i++) {
    const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cell');
/*
1. Adding a New Element to the DOM
const parentElement = document.getElementById('parent'); // Get the parent element
const newChild = document.createElement('div'); // Create a new div element
newChild.textContent = 'Hello, World!'; // Add some text to the new element
parentElement.appendChild(newChild); // Append the new element to the parent


2. Appending Multiple Children
const list = document.getElementById('myList');

for (let i = 1; i <= 3; i++) {
  const listItem = document.createElement('li'); // Create a list item
  listItem.textContent = `Item ${i}`; // Add text to the item
  list.appendChild(listItem); // Append the item to the list
}

3. Moving an Existing Element
const firstParent = document.getElementById('firstParent');
const secondParent = document.getElementById('secondParent');
const existingChild = document.getElementById('child');

// Move the child element from the first parent to the second parent
secondParent.appendChild(existingChild);

Key Points
Adds as the Last Child: The appendChild method always adds the new element as the last child of the parent.
Moves Existing Nodes: If the node already exists elsewhere in the DOM, appendChild removes it from its current location and appends it to the new parent.
Only One Node at a Time: appendChild can only append one node at a time. For appending multiple nodes, you need to call it repeatedly or use modern methods like append().

Modern Alternative: append
The append method can append multiple nodes or even strings, which makes it more flexible:
parentNode.append('Hello, ', newChild, 'World!');
*/