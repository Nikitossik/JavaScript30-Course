const inputs = document.querySelectorAll('.banner__input');

const handleChange = e => {
    const { id: prop, dataset: { measure }, value } = e.target;
    document.documentElement.style.setProperty(`--${prop}-value`, `${value}${measure}`);
}

inputs.forEach(input => {
    input.addEventListener('change', handleChange);
    input.addEventListener('mousemove', handleChange);
});