const container = document.getElementById("container");
let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

let gridCount = 16;

for (let i = 1; i <= gridCount; i++) {
    for (let j = 1; j <= gridCount; j++) {
        console.log('added');
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = "transparent";
        block.style.width = String(600 / (gridCount)) + "px";
        block.style.height = String(600 / (gridCount)) + "px";
        block.style.gridColumnStart = `${j}`
        block.style.gridRowStart = `${i}`
        console.log(block.style.getPropertyValue('height'))
        //console.log(block.style.getPropertyValue('minHeight'))

        container.append(block);
    }
}

const blocks = document.querySelectorAll(".block");
blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
        
        console.log(mouseDown)
        if (mouseDown) {
            const colorPicker = document.getElementById("color-picker").value;
            block.style.backgroundColor = colorPicker;
        }
    });
});


const clear = document.getElementById("clear");
clear.addEventListener('click', () => {  
    blocks.forEach(block => {
       block.style.backgroundColor = "transparent";
    });
});