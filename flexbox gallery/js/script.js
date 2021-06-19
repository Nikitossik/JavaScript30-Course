const panels = document.querySelectorAll('.panel');

function handleClick(){
    this.classList.toggle('panel--opened');
}

function handleTransition(e){
    if (e.propertyName.includes('flex')) this.classList.toggle('panel--active');
}

panels.forEach(panel => {
    panel.addEventListener('click', handleClick);
    panel.addEventListener('transitionend', handleTransition);
});