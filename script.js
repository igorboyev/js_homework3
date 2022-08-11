let name = prompt("Ваше ім'я");
if (name) name = name.replaceAll(` `,``);
while (!name) {
    name = prompt("Ваше ім'я");
    if (name) name = name.replaceAll(` `,``);
}

let surname = prompt("Ваше прізвище");
if (surname) surname = surname.replaceAll(` `,``);
while (!surname) {
    surname = prompt("Ваше прізвище");
    if (surname) surname = surname.replaceAll(` `,``);
}

let email = prompt("Ваш email");
if (email)email = email.replaceAll(` `,``).toLowerCase();
while(!email || !email.includes(`@`) || email.startsWith(`@`) || email.endsWith(`@`)){
    email = prompt("Ваш email");
    if (email) email = email.replaceAll(` `,``).toLowerCase();
}

let birthYear = prompt("Ваш рік народження");
if (birthYear) birthYear = birthYear.replaceAll(` `, ``);
while (isNaN(birthYear)) {
    birthYear = prompt("Ваш рік народження");
    if (birthYear) birthYear = birthYear.replaceAll(` `, ``);
}

let age = new Date().getFullYear() - birthYear;

document.write(`<ul>
    <li>Full name: ${name} ${surname}</li>
    <li>Email: ${email}</li>
    <li>Age: ${age}</li>
</ul>`);