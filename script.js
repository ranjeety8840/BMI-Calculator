const form = document.querySelector('form');

form.addEventListener('submit', (res) => {
    res.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');
    //console.log(height);
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid Height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid Weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${bmi}`;
    }
});