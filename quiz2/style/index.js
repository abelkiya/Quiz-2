let co = document.getElementById('co');
let pos = document.getElementById('pos');

co.addEventListener('mouseout', () => {
    color.style.borderColor = 'black';
});

document.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;
    createMouseTrail(x, y);
});


function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('mouse-trail');
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 700);
}


