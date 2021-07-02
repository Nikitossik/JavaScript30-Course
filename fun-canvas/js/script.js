const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 100;

//ctx.globalCompositeOperation = 'xor';
//ctx.globalCompositeOperation = 'lighten';
//ctx.globalCompositeOperation = 'soft-light';
//ctx.globalCompositeOperation = 'difference';
//ctx.globalCompositeOperation = 'exclusion';
ctx.globalCompositeOperation = 'hue';
//ctx.globalCompositeOperation = 'color';
//ctx.globalCompositeOperation = 'luminosity';

let isDrawing;
let hue = 0;

const draw = (e) => {
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);

    hue++;
    if (hue > 360) hue = 0;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath();
});
canvas.addEventListener('mouseout', () => {
    isDrawing = false;
    ctx.beginPath();
});