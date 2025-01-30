document.addEventListener("DOMContentLoaded", function () {
    let but = document.querySelector(".btn"); // Исправлен селектор

    but.addEventListener("click", function () {
        let max = 51;
        let min = 1;
        let random = Math.floor(Math.random() * (max - min + 1)) + min; // Генерация случайного числа от 0 до 50
        random--;
        alert(`Номер 1 вопроса: ${random}\nНомер 2 вопроса: ${max - random}`);
    });
});
