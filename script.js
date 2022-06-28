const container = document.getElementById("container");
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

blocks = document.querySelectorAll(".block");

setupGrid(16);

const sizeSlide = document.getElementById("size");
sizeSlide.addEventListener('change', (e) => {
    container.innerHTML = '';
    setupGrid(e.target.value);
});

function setupGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            console.log('added');
            const block = document.createElement('div');
            block.classList.add('block');
            block.style.backgroundColor = "transparent";
            block.style.width = String(600 / (size)) + "px";
            block.style.height = String(600 / (size)) + "px";
            block.style.gridColumnStart = `${j}`
            block.style.gridRowStart = `${i}`
            console.log(block.style.getPropertyValue('height'))
            //console.log(block.style.getPropertyValue('minHeight'))
    
            container.append(block);
            block.addEventListener('mouseover', () => {
        
                console.log(mouseDown)
                if (mouseDown) {
                    const colorPicker = document.getElementById("color-picker").value;
                    block.style.backgroundColor = colorPicker;
                }
            });

        }
    }
    blocks = document.querySelectorAll(".block");
}

const clear = document.getElementById("clear");
clear.addEventListener('click', () => {  
    blocks.forEach(block => {
       block.style.backgroundColor = "transparent";
    });
});