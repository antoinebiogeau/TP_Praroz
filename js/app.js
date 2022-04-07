document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let btn, email, password;
    let exprmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    let exprmdp = /^[a-zA-Z0-9._-]{2,15}$/;
    warning = document.querySelector(".warning");
    email = document.getElementsByTagName("input")[2].value;
    password = document.getElementsByTagName("input")[3].value;
    btn = document.getElementsByTagName("input")[4];
    btn.addEventListener("click", e => {
        e.preventDefault();
        login();
    });

    let login = () => {

        email = document.getElementsByTagName("input")[2].value;
        password = document.getElementsByTagName("input")[3].value;
        btn = document.getElementsByTagName("input")[4];

        if (email.match(exprmail) && password.match(exprmdp)) {
            warning.classList.add("success");
            warning.innerText = "Connexion réussie";
            localStorage.setItem("user", email);
            sessionStorage.setItem("user", "sessionid");
            alert("Bienvenue "+ email);
        } else if (password.match(exprmdp)) {
            warning.innerText = "Mail invalide";
            warning.classList.remove("success");
        } else if (email.match(exprmail)) {
            warning.innerText = "Mot de passe invalide";
            warning.classList.remove("success");
        } else {
            warning.innerText = "Mail ou mot de passe incorrecte";
            warning.classList.remove("success");
        }
    };
});