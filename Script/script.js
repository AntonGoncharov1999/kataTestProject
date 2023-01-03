const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc__btn')) return;

    let value = (event.target.innerText);

    //ассеты регулярных выражений для проверок коректности ввода
    let asset = /[^0-9*/+-.]/mi;
    let asset2 = /\+{2,}/gi;
    let asset3 = /\-{2,}/gi;
    let asset4 = /\*{2,}/gi;
    let asset5 = /\/{2,}/gi;
    let asset6 = /\.{2,}/gi;


    switch (value) {
        case 'C':
            result.innerText = ''
            break
        case 'Enter':
            if (result.innerText.search(asset) != -1) return;

            if (asset2.test(result.innerText)) {
                result.innerText = eval(result.innerText.replace(asset2, "+")).toFixed(2)
            } else if (asset3.test(result.innerText)) {
                result.innerText = eval(result.innerText.replace(asset3, "-")).toFixed(2)
            } else if (asset4.test(result.innerText)) {
                result.innerText = eval(result.innerText.replace(asset4, "*")).toFixed(2)
            } else if (asset5.test(result.innerText)) {
                result.innerText = eval(result.innerText.replace(asset5, "/")).toFixed(2)
            } else if (asset6.test(result.innerText)) {
                result.innerText = eval(result.innerText.replace(asset6, ".")).toFixed(2)
            } else {
                result.innerText = eval(result.innerText).toFixed(2)
            }
            break
        default:
            result.innerText += value;

    }
});