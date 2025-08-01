const bigDiv =  document.querySelector('.bigDiv');
const pickColor = document.getElementById('pickColor');
const numbGrid = document.getElementById('pickSize');
const clearBtn = document.getElementById('clearBtn')


numbGrid.addEventListener('input', () => {
    const n = parseInt(numbGrid.value);
    if (!n || n <= 0) return;
  
    const total = n * n;
  
    bigDiv.innerHTML = ''; // limpia el contenido previo

    for (let i = 0; i < total ; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('square')
        newDiv.style.flex = `0 0 calc(${100 / n}% )`;
        newDiv.style.aspectRatio = '1 / 1';
        const changeColor = () => {
            newDiv.style.backgroundColor = pickColor.value;
        }
        newDiv.addEventListener('mouseover', changeColor);
        bigDiv.appendChild(newDiv);
    }
});

clearBtn.addEventListener('click', () => {
    const originalColor = getComputedStyle(bigDiv).backgroundColor;
    const allSquares = document.querySelectorAll('.square')
    allSquares.forEach(square => {
        square.style.backgroundColor = originalColor;
    });
})