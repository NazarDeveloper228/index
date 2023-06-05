
/*
За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач
Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів
  Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні
Визначити середнє арифметичне трьох чисел
Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)
 */
//DZ1.1
let fullName = prompt("What is your name?:")
alert("Hello, " + fullName + "! How are you?")
//DZ1.2
let calculator1 = prompt ("Введите число:")
let calculator2 = prompt ("Введите второе число:")
let answer1 = (parseInt(calculator1) + parseInt(calculator2))
let answer2 = (parseInt(calculator1) - parseInt(calculator2))
let answer3 = (parseInt(calculator1) / parseInt(calculator2))
let answer4 = (parseInt(calculator1) * parseInt(calculator2))
alert(" Сумма: \n" + answer1)
alert(" Разность: \n" + answer2)
alert(" Частное: \n" + answer3)
alert(" Произведение: \n" + answer4)
//DZ1.3
alert("Сравним два числа")
let comparison1 = prompt ("Введите число для сравнения:")
let comparison2 = prompt ("Введите второе число для сравнения:")
let answer5 = (parseInt(comparison1) === parseInt(comparison2))
alert("Ответ: \n" + Boolean(answer5))
//DZ1.4
alert("Теперь найдём среднее арифметическое трёх чисел:")
let average1 = prompt ("Введите число:")
let average2 = prompt ("Введите второе число:")
let average3 = prompt ("Введите третье число:")
let answer6 = ((parseInt(average1) + parseInt(average2) + parseInt(average3)) / 3)
alert("Ответ: \n" + answer6)
//DZ1.5
let division = prompt ("Введите пятизначное число:")
let answer7 = division / 10000;
let answer8 = division / 1000 % 10;
let answer9 = division / 100 % 10;
let answer10 = division / 10 % 10;
let answer11 = division % 10;
alert(String(parseInt(answer7)) + ' ' + String(parseInt(answer8)) + ' ' + String(parseInt(answer9)) + ' ' + String(parseInt(answer10)) + ' ' + String(parseInt(answer11)));





