const bigDiv = document.querySelector('.bigDiv');
const pickColor = document.getElementById('pickColor');
const numbGrid = document.getElementById('pickSize');
const clearBtn = document.getElementById('clearBtn');

let isDrawing = false;

// Detectar cuando se presiona y suelta el clic en todo el documento
document.addEventListener('pointerdown', () => isDrawing = true);
document.addEventListener('pointerup', () => isDrawing = false);

numbGrid.addEventListener('input', () => {
    const n = parseInt(numbGrid.value);
    if (!n || n <= 0) return;

    const total = n * n;
    bigDiv.innerHTML = ''; // limpia el contenido previo

    for (let i = 0; i < total; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        newDiv.setAttribute('draggable', 'false');
        newDiv.style.flex = `0 0 calc(${100 / n}%)`;
        newDiv.style.aspectRatio = '1 / 1';

        // Pinta solo si el mouse está presionado
        const paint = () => {
            if (isDrawing) {
                newDiv.style.backgroundColor = pickColor.value;
            }
        };

        // Permite pintar tanto al presionar como al mover con clic
        newDiv.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            newDiv.style.backgroundColor = pickColor.value;
        });

        newDiv.addEventListener('pointermove', paint);

        bigDiv.appendChild(newDiv);
    }
});

// Botón para clear
clearBtn.addEventListener('click', () => {
    const originalColor = getComputedStyle(bigDiv).backgroundColor;
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => {
        square.style.backgroundColor = originalColor;
    });
});
