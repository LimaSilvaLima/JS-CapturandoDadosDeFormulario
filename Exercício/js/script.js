const btn = document.querySelector(id="#submitbtn");
const header = document.querySelector('h1');

btn.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const surname = document.querySelector("#surname").value;
    const mymail = document.querySelector("#mymail").value;
    const birthdate = document.querySelector("#birthdate").value;

    console.table([name, surname, mymail]);

    header.innerHTML = "Cadastro de : " + name + " "  + surname + "  " + "birthdate"
})