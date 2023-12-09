describe ('Проверка формы авторизации', function (){
   
    it ('Валидный логин и пароль', function (){
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#mail') .type('german@dolnikov.ru'); // ввод логина
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#pass') .type('iLoveqastudio1'); // ввод пароля
        cy.get('#loginButton') .should('be.enabled'); // кнопка "Войти" активна
        cy.get('#loginButton') .click(); // клик по кнопке "Войти"
        cy.get('#messageHeader') .should('be.visible'); // проверка отображения сообщения
        cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // активность крестика

        })

    it ('Форма востановления пароля', function (){
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#forgotEmailButton') .click(); // клик по кнопке "Забыли пароль?"
        cy.get('#mailForgot') .type('german@dolnikov.ru'); // ввод e-mail
        cy.get('#restoreEmailButton').click(); // клик по кнопке "Отправить код"
        cy.get('#messageHeader') .should('be.visible'); // проверка отображения сообщения
        cy.get('#messageHeader') .contains('Успешно отправили пароль на e-mail'); // проверка текста сообщения
        cy.get('#exitMessageButton') .should('be.visible'); // активность крестика

        })

    it ('Валидный логин и невалидный пароль', function (){
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#mail') .type('german@dolnikov.ru'); // ввод логина
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#pass') .type('111'); // ввод пароля
        cy.get('#loginButton') .should('be.enabled'); // кнопка "Войти" активна
        cy.get('#loginButton') .click(); // клик по кнопке "Войти"
        cy.get('#message') .should('be.visible'); // проверка отображения сообщения
        cy.get('#message') .contains('Такого логина или пароля нет'); // проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // активность крестика

        })

    it ('Невалидный логин и валидный пароль', function (){
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#mail') .type('german@gmail.ru'); // ввод логина
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#pass') .type('iLoveqastudio1'); // ввод пароля
        cy.get('#loginButton') .should('be.enabled'); // кнопка "Войти" активна
        cy.get('#loginButton') .click(); // клик по кнопке "Войти"
        cy.get('#messageHeader') .should('be.visible'); // проверка отображения сообщения
        cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // активность крестика

        })

    it ('Проверка валидации e-mail', function (){
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#mail') .type('germandolnikov.ru'); // ввод логина
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#pass') .type('iLoveqastudio1'); // ввод пароля
        cy.get('#loginButton') .should('be.enabled'); // кнопка "Войти" активна
        cy.get('#loginButton') .click(); // клик по кнопке "Войти"
        cy.get('#messageHeader') .should('be.visible'); // проверка отображения сообщения
        cy.get('#messageHeader') .contains('Нужно исправить проблему валидации'); // проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // активность крестика

        })

    it ('Проверка регистра e-mail', function (){
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#mail') .type('German@Dolnikov.ru'); // ввод логина
        cy.get('#loginButton') .should('be.disabled'); // кнопка "Войти" задизейблена
        cy.get('#pass') .type('iLoveqastudio1'); // ввод пароля
        cy.get('#loginButton') .should('be.enabled'); // кнопка "Войти" активна
        cy.get('#loginButton') .click(); // клик по кнопке "Войти"
        cy.get('#messageHeader') .should('be.visible'); // проверка отображения сообщения
        cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // проверка текста сообщения
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible'); // активность крестика

        })
      

        



    



















})



















