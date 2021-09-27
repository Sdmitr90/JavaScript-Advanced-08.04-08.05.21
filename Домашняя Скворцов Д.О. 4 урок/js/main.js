function submitBarForm() {
    let name = this.querySelector("#name");
    let number = this.querySelector("#telNumber");
    let email = this.querySelector("#inputEmail");
    let regexpName = /^[a-zа-яёA-ZА-ЯЁ]/;
    let regexpNumber = /^\+[0-9]\([0-9]{3}\)[0-9]{3}\-[0-9]{4}/; 
    let regexpEmail = /^[a-z]{2}(\-|\.){0,1}[a-z]{4}\@[a-z]{4}\.[a-z]{2}/i; 
    // mymail@mail.ru, my.mail@mail.ru<br>my-mail@mail.ru
    if (regexpName.test(name.value)) { // Проверка имени
        name.style.outline = "none";
    } else {
        name.style.outline = "solid red 2px";
    }

    if (regexpNumber.test(number.value)) { // Проверка Телефонного номера
        number.style.outline = "none";
    } else {
        number.style.outline = "solid red 2px";
    }
    if (regexpEmail.test(email.value)) { // Проверка E-Mail
        email.style.outline = "none";
    } else {
        email.style.outline = "solid red 2px";
    }
    if (regexpName.test(name.value)&&regexpNumber.test(number.value)&&regexpEmail.test(email.value)) { // Проверка Всей формы
        alert("Ваши данные успешно отправлены!")
    }
}
document.getElementById("formWithValidation").onsubmit = submitBarForm;