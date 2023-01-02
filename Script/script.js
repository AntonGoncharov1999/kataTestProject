const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc__btn')) return;

    let value = (event.target.innerText);

    switch (value) {
        case 'Отчистка':
            result.innerText = ''
            break
        case 'Результат':
            result.innerText = eval(result.innerText).toFixed(2)
            break
        default:
            result.innerText += value;

    }

});