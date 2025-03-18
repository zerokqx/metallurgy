var useGetAnimation = function () {
    Promise.resolve().then(function () { return require('./useWelcome'); }).then(function (module) {
        console.log(module); // Выводим содержимое модуля
    })
        .catch(function (error) {
        console.error('Ошибка импорта:', error); // Обрабатываем ошибку
    });
};
useGetAnimation();
