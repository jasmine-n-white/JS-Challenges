document.title = "Color Palette";
const style = document.createElement("style");
style.textContent = `
    body {
        font-family: comic sans ms, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
    }
    h1 {
        color: #060606ff;
    }
    #colorPalette {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 10px;
        margin-top: 20px;
    }
    .colorBox {
        width: 100px;
        height: 100px;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
    }
`;
document.head.appendChild(style);

const palette = document.createElement("div");
palette.id = "colorPalette";
document.body.appendChild(palette);

for (let i = 0; i < 5; i++) {
    const box = document.createElement("div");
    box.className = "colorBox";    
    palette.appendChild(box);
}

const generateBtn = document.createElement('button');
generateBtn.textContent = 'Generate All';
document.body.insertBefore(generateBtn, palette);

function randomColor() {
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
}

palette.querySelectorAll('.colorBox').forEach(box => {
    box.addEventListener("click", () => {
        const color = randomColor();
        box.style.backgroundColor = color;    
    });
});

generateBtn.addEventListener('click', () => {
    palette.querySelectorAll('.colorBox').forEach(box => {
        const color = randomColor();
        box.style.backgroundColor = color;
    })
})