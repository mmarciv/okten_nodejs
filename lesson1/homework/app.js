/*
ДЗ:
    Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
    Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
    Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами

    user ({. name: "Andrii", age: 22, city: "Lviv" }),
    відповідно
     перший - onlineUsers,
     другий - inPersonUsers;
    і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
    але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

    Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
    (ті, що були в папці inPerson будуть в папці online)
*/

const {
    createMainDir, createMainInPersonDir, createMainOnlineDir,
    createOnlineFiles, createInPersonFiles, moveDirsContent
} = require("./dircreator");

const onlineUsers = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Mike", age: 41, city: "Kiev"},
    {name: "Ira", age: 22, city: "Odessa"},
    {name: "Ivan", age: 34, city: "Dnipro"},
    {name: "Anna", age: 18, city: "Lviv"}
];

const inPersonUsers = [
    {name: "Taras", age: 22, city: "Lviv"},
    {name: "Ivanka", age: 41, city: "Kiev"},
    {name: "Oleg", age: 22, city: "Odessa"}
];

createMainDir();
createMainInPersonDir();
createMainOnlineDir();

createOnlineFiles(onlineUsers);
createInPersonFiles(inPersonUsers);

moveDirsContent();
