
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach((squere) => {
        squere.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            alert('O jogo acabou')
        },100);

    }
    
    updateSquare(position);
}

function updateSquare(id){
    let square = document.getElementById(id.toString())
    let symbol = board[id];
    if (symbol != '') {
        square.innerHTML = `<div class='${symbol}'></div>`;
    }

}
