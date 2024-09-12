const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/login', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    const logData = `Login: ${login}, Password: ${password}\n`;

    fs.appendFile('login_attempts.txt', logData, (err) => {
        if (err) throw err;
        console.log('Данные входа записаны.');
    });

    res.send('Попытка входа записана.');
});


app.post('/register', (req, res) => {
    const { login, password, confirmPassword, email } = req.body;
    const regData = `Login: ${login}, Password: ${password}, Email: ${email}\n`;

    fs.appendFile('registration_data.txt', regData, (err) => {
        if (err) throw err;
        console.log('Данные регистрации записаны.');
    });

    res.send('Регистрация завершена.');
});
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
