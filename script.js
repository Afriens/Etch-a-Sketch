const bigDiv =  document.querySelector('.bigDiv');

const boardCreate = () => {
    for (i=0; i < 16 ; i++){
        const newDiv = document.createElement('div');
        bigDiv.appendChild(newDiv);
    }
}

boardCreate()