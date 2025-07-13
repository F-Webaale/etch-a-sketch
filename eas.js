const container = document.querySelector('#container');
//create a button to request for divs
let btn = document.createElement('button');
let body = document.querySelector('body');

body.insertBefore(btn, container);
btn.setAttribute('style', 'height: 20px; width: auto; alignItems: flexStart;');
btn.textContent = "CLick Me!";

function makeGrid(input) {
    input = Number(prompt('Insert Number to create grid'));

    if (input > 100) {
        prompt('You cant insert number greater than 100, TRY AGAIN!');
    };

    let row = input;
    let column = input;
    let cellSize = 20;
    container.style.width = `${column * cellSize}px`;
    container.style.fontSize = 0;


        for(let i=1; i<=row * column; i++) {
            let cell = document.createElement('div');
            cell.setAttribute('style', 'backgroundColor: green;');
            cell.setAttribute(`class` ,`divs`);
            cell.style.display = 'inline-block';
            cell.style.width = `${cellSize}px`;
            cell.style.height = '50px';
            cell.style.border = '1px solid red';
            container.appendChild(cell);
        }

    //add a mouse down event listener(hover effect)
        let divs = document.querySelectorAll(".divs");

        let divArr = [...divs];
        divArr.forEach(
            div => {
                div.addEventListener('mouseover', () => {
                    div.style.background = 'blue';
                }
                );
                
                div.addEventListener('mouseout', () => {
                    div.style.background = 'lightGrey';
                }
                );
            }
        );
}

btn.addEventListener('click', makeGrid);


//add a mouse down event listener(hover effect)
let divs = document.querySelectorAll(".divs");

let divArr = [...divs];
divArr.forEach(
    div => {
        div.addEventListener('mouseover', () => {
            div.style.background = 'blue';
        }
        );
        
        div.addEventListener('mouseout', () => {
            div.style.background = 'lightGrey';
        }
        );
    }
);
